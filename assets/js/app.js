var messages = document.getElementById('sms'), phonenumbers = document.getElementById('phonenumbers');

function loadSms(n) {    
    axios(`https://api.pinoydev.org/sms/${n}.json`).then(function(res) {
        messages.innerHTML = '';
        res.data.forEach(function(sms) {
            messages.innerHTML += `<div class="card"><div class="card-content"><div class="content"><p>${sms.sender} <small>${moment(sms.date).fromNow()}</small></p><p>${sms.text}</p></div></div></div>`;
        });
    });
}

phonenumbers.addEventListener('click', function(e) {
   let a = phonenumbers.getElementsByClassName('is-active');
   for (b in a) a[b].className = '';
   e.target.className = 'is-active'; loadSms(e.target.innerText);
});
