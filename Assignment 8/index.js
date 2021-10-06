const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const Visitor=require('./models/visitor');
const methodOverride=require('method-override');
require('dotenv').config();
const db=('mongodb+srv://ishaan14:123098abzy@cluster0.safj0.mongodb.net/visitorsdb?retryWrites=true&w=majority' || 'mongodb://localhost:27017/visitorsdb');
mongoose.connect(db)
.then(()=>{
    console.log("successfuly connected");
})
.catch((err)=>{
    console.log(err)
});
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('explore');
})
app.get('/home',async (req,res)=>{
    const visitors=await Visitor.find({});
    res.render('home',{visitors});
})
app.get('/home/enter',(req,res)=>{
    res.render('enter');
})
app.post('/home',async(req,res)=>{
    const {name,email,phone,cinh,cinm}=req.body;
    sendemail(email,cinh,cinm);
    await Visitor.create({name,email,phone,cinh,cinm});
    res.redirect('/home');
})
app.get('/home/:id',async(req,res)=>{
    const {id}=req.params;
    const d=await Visitor.findById(id);
    res.render('exit',{d});
})
app.put('/home/:id',async(req,res)=>{
    const {id}=req.params;
    const {couth,coutm}=req.body;
    const oh=couth;
    const om=coutm;
    const d=await Visitor.findById(id)
    sendexmail(d.email,oh,om)
    await Visitor.findByIdAndUpdate(id,{$set:{status:"Checked Out",couth:oh,coutm,om}});
    res.redirect('/home');
})
app.delete('/home/:id',async (req,res)=>{
    const {id}=req.params;
    await Visitor.findByIdAndDelete(id);
    res.redirect('/home');
})


function sendemail(email,cinh,cinm){
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.API_KEY);
    let m=cinm.toString();
    let h=cinh.toString();;
    if(cinm<=9){
        m='0'+cinm.toString();
    }
    if(cinh<=9){
        h='0'+cinh.toString();
    }
    const msg={
        to: email,
        from:{
            name:'Ishaan Garg',
            email:"ishaangarg.cse19@chitkarauniversity.edu.in"
        },
        subject:"Entering building",
        text:`Hi you entered the building at ${h}:${m}`
    };
    sgMail.send(msg).then(()=>{
        console.log("Mail sent");
    })
    .catch((err)=>{
        console.log(err);
    })
}


function sendexmail(email,couth,coutm){
    const sgMail=require('@sendgrid/mail');
    sgMail.setApiKey(process.env.API_KEY);
    let m=coutm.toString();
    let h=couth.toString();
    if(coutm<=9){
        m='0'+coutm.toString();
    }
    if(couth<=9){
        h='0'+couth.toString();
    }
    const msg={
      to: email,
      from:{
        name:'Ishaan Garg',
        email:"ishaangarg.cse19@chitkarauniversity.edu.in"
    },
      subject:"Checking out",
      text:`Hello, you have checked out at ${h}:${m}`
    };
    sgMail.send(msg).then(()=>{
        console.log("Mail sent");
    })
    .catch((err)=>{
        console.log(err);
    });
}




const port = (process.env.PORT || 8000);
app.listen(port,()=>{
    console.log(`server listening at port ${port}`);
})
