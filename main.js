canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
img_array=["Img 1.jpg", "Img 2.jpg", "Img 3.jpg","Img 4.jpg","mars.jpg" ];
var random_img= Math.floor(Math.random()*5);





bg_image=img_array[random_img];
console.log(bg_image);
rover_image="rover.png";
rover_width=100;
rover_height=100;
rover_x= 20
rover_y=20;

function add(){
bg_img=new Image();
bg_img.onload=uploadBg;
bg_img.src=bg_image;

rover_img=new Image();
rover_img.onload=uploadRover;
rover_img.src=rover_image;}

function uploadBg(){
ctx.drawImage(bg_img, 0,0, canvas.width, canvas.height);}
function uploadRover(){
ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);}

window.addEventListener("keydown" ,my_keydown);

function my_keydown(e){
keyPress=e.keyCode;
console.log(keyPress);

if (keyPress=='38'){
up();
console.log("Up");}

if (keyPress=='40'){
down();
console.log("Down");}

if (keyPress=='39'){
right();
console.log("Right");}

if (keyPress=='37'){
left();
console.log("Left");}}

function up(){
if (rover_y >=0){
rover_y= rover_y-10;
uploadBg();
uploadRover();}}

function down(){
if (rover_y <=550){
rover_y= rover_y+10;
uploadBg();
uploadRover();}}

function right(){
if (rover_x <=750){
rover_x=rover_x+10;
uploadBg();
uploadRover();}}

function left(){
if (rover_y >=0){
rover_x=rover_x-10;
uploadBg();
uploadRover();}}