const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3f8a50f8ffmshc2e4fbe247ea892p162f61jsnff0c6ecdd3b3',
		'X-RapidAPI-Host': 'ip-whois-geolocation1.p.rapidapi.com'
    }
  }
  
  const fetchIpInfo = function(ip) {
    return fetch(`https://ip-whois-geolocation1.p.rapidapi.com/?ip=${ip}`, OPTIONS)
      .then(function(res) {
        return res.json();
      })
      .catch(function(err) {
        console.error(err);
      });
  }
  
  
  const $form = document.querySelector('#form');
  const $input = document.querySelector('#input');
  const $submit = document.querySelector('#submit');
  const $results = document.querySelector('#results');
  
  $form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const {value} = $input;
    if (!value) return;
  
    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', 'true');
  
    try {
      const ipInfo = await fetchIpInfo(value);
      
      if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2);
      }
    } catch (error) {
      console.error(error);
    } finally {
      $submit.removeAttribute('disabled');
      $submit.removeAttribute('aria-busy');
    }
  });
  