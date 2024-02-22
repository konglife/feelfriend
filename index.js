const { log } = require('console');
const express = require('express');
const { registerPartials } = require('hbs');
const hbs = require('nbs') // นำ hbs เข้ามาใช้งาน
const app = express();

app.use(express.urlencoded({ extended: true})); //ทำให้ express อ่านข้อมูลจากฟอร์มได้
app.set('view engine', 'hbs'); // ตั้งค่า view engine เป็น hbs
hbs.registerPartials();

// หน้าแรก '/'
app.get('/', (req, res) => {
    console.log(req.query);
    const { q, sortBy } = req.query; //การสกัดตัวแปรจาก query
    res.render('home', { q, sortBy }); // parameters ที่ส่งเข้าไปใน render ตัวแรกคือ ที่อยู่ไฟล์เทมเพลต, ตัวที่สองคือข้อมูลที่เราจะส่งไป เขียนเป็น object เสมอ
});

// สร้าง routes สำหรับหน้าฟอร์มสร้างโพสต์ใหม่
app.get('/p/new',(req, res) => {
    res.render('postNew');
});

// สร้าง routes สำหรับหน้าเซฟฟอร์ม,  request แบบ body
app.post('/p/new', (req, res) => {
    console.log(req.body); // เรียกดูค่า body ที่ user req เข้ามา, req.body ถ้าไม่มีข้อมูลสงเข้ามาค่าจะเป็น undefined แต่ถ้ามีจะเปลี่ยนเป็น object
    const {title} = req.body ?? {}; // ถาม GPT
    res.send(`Submit ฟอร์มแล้วครับ Title=${title}`);
});


// สร้าง routes สำหรับหน้าโพส
app.get('/p/:postId', (req, res) => { // :postId คือการสร้างตัวแปรไว้รับค่าจาก params 
    console.log(req.params); // เรียกดูค่า params ที่ user req เข้ามา
    const {postId} = req.params; // การสกัดตัวแปร postId *ต้องตรงกับที่ประกาศไว้
    res.render('postId', {postId}) //res ข้อมูลออกทางหน้าเว็บ
});


app.listen(9753, () => {
    console.log('run http://localhost:9753');
});

