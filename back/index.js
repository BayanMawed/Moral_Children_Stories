const express = require('express')
const bodyparser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()
const sqlite3 = require('sqlite3').verbose();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.use( ( req, res, next ) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.all('/api/form', (req, res) => {
    console.log(req.body)
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
     <h3>Contact Details</h3>
     <ul>
         <li>Name: ${req.body.name}</li>
         <li>Email: ${req.body.email}</li>
     </ul>
     <h3>Message</h3>
     <p>${req.body.message}</p>`
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,

            auth: {
                user: 'bmaweed@gmail.com',
                pass: '00963116321072'
            }
        });
        let mailOptions = {
            from: 'test@testaccount', // sender address
            to: 'bmaweed@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: req.body.message, // plain text body
            html: htmlEmail // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.message);

            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        })

    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

////////////////////////////
let db = new sqlite3.Database('../moralstories.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.\n');
  });
app.get('/story/:title',( req, res)=>{
    const title = req.params.title
    db.all('SELECT * FROM story WHERE title=? LIMIT 1', [title], (err, rows) => {
        if (err) {
            res.status(500).send({success:false,error:true, message:err.message})
            return
        }
        if(!rows.length){
            res.status(500).send({success:false,error:true, message:'no story found'})
            return;
        }
        res.send({success:true,data:rows})
    });
})

app.get('/Category/:name',( req, res)=>{
    const name = req.params.name
    db.all('select * from categories where categories.name = ?', [name], ( err, categories ) => {
        if (err || categories.length < 1) { return res.status(500).send('error') }
        const category = categories[0]
        category.headerImage = category.valueimage
        db.all('select * from story where story.category = ?', [name], ( err, storiesList ) => {
            if (err || storiesList.length < 1) { return res.status(500).send('error') }
            console.log(storiesList)    
            db.all('select * from videoStory where videoStory.category = ?', [name], ( err, videosList ) => {
                if (err || videosList.length < 1) { return res.status(500).send('error') }
                console.log(videosList)
                const data = { ...category, videosList, storiesList}
                res.send({success:true,data})
            })
        })    
    })
})







// app.post('/quotes', (req, res) => {
//     db.collection('quotes').save(req.body, (err, result) => {
//       if (err) return console.log(err)
//       console.log('saved to database')
//       res.redirect('/')
//     })
//   })