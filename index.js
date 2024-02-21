const { log } = require('console');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));

// หน้าแรก '/'
app.get('/', (req, res) => {
    res.send('สวัสดี Express dev');
});

// สร้าง routes สำหรับหน้าฟอร์มสร้างโพสต์ใหม่
app.get('/p/new',(req, res) => {
    res.send('หน้าฟอร์มสร้างโพสต์ใหม่');
});

// สร้าง routes สำหรับหน้าเซฟฟอร์ม,  request แบบ body
app.post('/p/new', (req, res) => {
    console.log(req.body); // เรียกดูค่า body ที่ user req เข้ามา, req.body ถ้าไม่มีข้อมูลสงเข้ามาค่าจะเป็น undefined แต่ถ้ามีจะเปลี่ยนเป็น object
    const {title} = req.body;
    res.send(`Submit ฟอร์มแล้วครับ Title=${title}`);
});


// สร้าง routes สำหรับหน้าโพส
app.get('/p/:postId', (req, res) => { // :postId คือการสร้างตัวแปรไว้รับค่าจาก params 
    console.log(req.params); // เรียกดูค่า params ที่ user req เข้ามา
    const {postId} = req.params; // การสกัดตัวแปร postId *ต้องตรงกับที่ประกาศไว้
    res.send(`นี่คือหน้าโพส ID=${postId}`); //res ข้อมูลออกทางหน้าเว็บ
});


app.listen(9753, () => {
    console.log('run http://localhost:9753');
});

