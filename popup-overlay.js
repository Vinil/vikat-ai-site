(function(){
  if(sessionStorage.getItem('briefingDismissed'))return;
  var o=document.createElement('div');
  o.style.cssText='position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.75);backdrop-filter:blur(12px);opacity:0;transition:opacity .4s ease;';
  var w=document.createElement('div');
  w.style.cssText='position:relative;width:92vw;height:90vh;max-width:1400px;border-radius:16px;overflow:hidden;border:1px solid rgba(0,212,255,.15);box-shadow:0 32px 80px rgba(0,0,0,.6);';
  var b=document.createElement('button');
  b.innerHTML='\u00d7';b.title='Close';
  b.style.cssText='position:absolute;top:12px;right:12px;z-index:10000;width:36px;height:36px;border-radius:50%;border:1px solid rgba(242,244,250,.15);background:rgba(5,5,7,.85);backdrop-filter:blur(8px);color:#f2f4fa;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;';
  var f=document.createElement('iframe');
  f.src='ai-cybersec-briefing.html';f.style.cssText='width:100%;height:100%;border:none;';
  w.appendChild(b);w.appendChild(f);o.appendChild(w);document.body.appendChild(o);
  setTimeout(function(){o.style.opacity='1';},500);
  function d(){o.style.opacity='0';setTimeout(function(){o.remove();},400);sessionStorage.setItem('briefingDismissed','1');}
  b.onclick=d;o.onclick=function(e){if(e.target===o)d();};
})();
