// canvas.js
function innit(){
            for(var i=0;i<tagEle.length;i++){
                var a , b;
                var k = -1+(2*(i+1)-1)/tagEle.length;
                var a = Math.acos(k);
                var b = a*Math.sqrt(tagEle.length*Math.PI);
                // var a = Math.random()*2*Math.PI;
                // var b = Math.random()*2*Math.PI;
                var x = RADIUS * Math.sin(a) * Math.cos(b);
                var y = RADIUS * Math.sin(a) * Math.sin(b); 
                var z = RADIUS * Math.cos(a);
                var t = new tag(tagEle[i] , x , y , z);
                tagEle[i].style.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
                tags.push(t);
                t.move();
            }
        }