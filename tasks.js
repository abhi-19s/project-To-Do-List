var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  const taskInput = document.getElementById('input');
  const taskList = document.getElementById('list');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span class="task">${taskText}</span>
      <span class="timer">01:00</span>
    `;
    taskList.appendChild(newTask);
    startTimer(newTask.getElementsByClassName('timer')[0], 60); 
    taskInput.value = ''; 
  }
}

function startTimer(timerElement, initialTime) {
  let time = initialTime;
  const countDown = setInterval(() => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    time--;
    if (time < 0) {
      clearInterval(countDown);
      timerElement.textContent = 'Time Up!';
    }
  }, 1000);
}
     var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
  
  document.getElementById("input").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

