$(document).ready(() => {
  
   $('#world').click((e) => {
    if($('#main-content').html() != ''){
      $('#main-content').empty()
        $.ajax({
          url:"https://api.nytimes.com/svc/topstories/v2/health.json?",
          data: {
              "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
          }
      }).done((news) => {
        $('#header-content').html(`
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1 class="display-4">${news.results[0].title}</h1>
            <p class="lead">${news.results[0].abstract}</p>
            <a href="${news.results[0].url}" target="_blank">Continue reading</a>
          </div>
          <div class="col-md-4">
            <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
          </div>
        </div>
        </div>
      </div>
        `)
        for(var i = 1;i< news.results.length;i+=2){
          if(news.results[i].multimedia[0] == null){
            $('#thumbnail').append(`Placeholder`)
            $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
          }else{
            $('#main-content').append(`
            <div class="row mb-2">
            <div class="col-md-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                  <h3 class="mb-0">${news.results[i].title}</h3>
                  <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                  <p class="card-text mb-auto">${news.results[i].abstract}</p>
                  <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
                </div>
                <div class="col-auto d-none d-lg-block">
                        <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                  <h3 class="mb-0">${news.results[i-1].title}</h3>
                  <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                  <p class="mb-auto">${news.results[i-1].abstract}</p>
                  <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
                </div>
                <div class="col-auto d-none d-lg-block">
                        <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
                </div>
              </div>
            </div>
          </div>
        </div>
          `)
            }
            }
      
      }).catch((error) => {
      console.log(error);
      })
       }
})
$('#politics').click((e) => {
  if($('#main-content').html() != ''){
    $('#main-content').empty()
      $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/politics.json?",
        data: {
            "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
        }
    }).done((news) => {
      $('#header-content').html(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">${news.results[0].title}</h1>
          <p class="lead">${news.results[0].abstract}</p>
          <a href="${news.results[0].url}" target="_blank">Continue reading</a>
        </div>
        <div class="col-md-4">
          <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
        </div>
      </div>
      </div>
    </div>
      `)
      for(var i = 1;i< news.results.length;i+=2){
        if(news.results[i].multimedia[0] == null){
          $('#thumbnail').append(`Placeholder`)
          $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
        }else{
          $('#main-content').append(`
          <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                <h3 class="mb-0">${news.results[i].title}</h3>
                <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                <p class="card-text mb-auto">${news.results[i].abstract}</p>
                <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                <h3 class="mb-0">${news.results[i-1].title}</h3>
                <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                <p class="mb-auto">${news.results[i-1].abstract}</p>
                <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
        </div>
      </div> 
        `)
          }
          }
   
    }).catch((error) => {
    console.log(error);
    })
     }
})
$('#business').click((e) => {
  if($('#main-content').html() != ''){
    $('#main-content').empty()
      $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/business.json?",
        data: {
            "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
        }
    }).done((news) => {
      $('#header-content').html(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">${news.results[0].title}</h1>
          <p class="lead">${news.results[0].abstract}</p>
          <a href="${news.results[0].url}" target="_blank">Continue reading</a>
        </div>
        <div class="col-md-4">
          <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
        </div>
      </div>
      </div>
    </div>
      `)
      for(var i = 1;i< news.results.length;i+=2){
        if(news.results[i].multimedia[0] == null){
          $('#thumbnail').append(news.results[i].multimedia[1])
          $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
        }else{
          $('#main-content').append(`
          <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                <h3 class="mb-0">${news.results[i].title}</h3>
                <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                <p class="card-text mb-auto">${news.results[i].abstract}</p>
                <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                <h3 class="mb-0">${news.results[i-1].title}</h3>
                <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                <p class="mb-auto">${news.results[i-1].abstract}</p>
                <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
        </div>
      </div>
        `)
          }
          }
      
    }).catch((error) => {
    console.log(error);
    })
     }
})
$('#tech').click((e) => {
 if($('#main-content').html() != ''){
  $('#main-content').empty()
    $.ajax({
      url:"https://api.nytimes.com/svc/topstories/v2/technology.json?",
      data: {
          "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
      }
  }).done((news) => {
    $('#header-content').html(`
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1 class="display-4">${news.results[0].title}</h1>
        <p class="lead">${news.results[0].abstract}</p>
        <a href="${news.results[0].url}" target="_blank">Continue reading</a>
      </div>
      <div class="col-md-4">
        <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
      </div>
    </div>
    </div>
  </div>
    `)
    for(var i = 1;i< news.results.length;i+=2){
      if(news.results[i].multimedia[0] == null){
        $('#thumbnail').append(`Placeholder`)
        $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
      }else{
        $('#main-content').append(`
        <div class="row mb-2">
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
              <h3 class="mb-0">${news.results[i].title}</h3>
              <div class="mb-1 text-muted">${news.results[i].created_date}</div>
              <p class="card-text mb-auto">${news.results[i].abstract}</p>
              <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
                    <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
              <h3 class="mb-0">${news.results[i-1].title}</h3>
              <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
              <p class="mb-auto">${news.results[i-1].abstract}</p>
              <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
                    <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
            </div>
          </div>
        </div>
      </div>
    </div>
      `)
        }
        }
     
  }).catch((error) => {
  console.log(error);
  })
   }
 }
)
// PROBA NOVOG FEAUTREA

$('#health').click((e) => {
  if($('#main-content').html() != ''){
    $('#main-content').empty()
      $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/health.json?",
        data: {
            "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
        }
    }).done((news) => {
      $('#header-content').html(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">${news.results[0].title}</h1>
          <p class="lead">${news.results[0].abstract}</p>
          <a href="${news.results[0].url}" target="_blank">Continue reading</a>
        </div>
        <div class="col-md-4">
          <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
        </div>
      </div>
      </div>
    </div>
      `)
      for(var i = 1;i< news.results.length;i+=2){
        if(news.results[i].multimedia[0] == null){
          $('#thumbnail').append(`Placeholder`)
          $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
        }else{
          $('#main-content').append(`
          <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                <h3 class="mb-0">${news.results[i].title}</h3>
                <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                <p class="card-text mb-auto">${news.results[i].abstract}</p>
                <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                <h3 class="mb-0">${news.results[i-1].title}</h3>
                <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                <p class="mb-auto">${news.results[i-1].abstract}</p>
                <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
        </div>
      </div>
        `)
          }
          }
    
    }).catch((error) => {
    console.log(error);
    })
     }
})
$('#science').click((e) => {
  if($('#main-content').html() != ''){
    $('#main-content').empty()
      $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/science.json?",
        data: {
            "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
        }
    }).done((news) => {
      $('#header-content').html(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">${news.results[0].title}</h1>
          <p class="lead">${news.results[0].abstract}</p>
          <a href="${news.results[0].url}" target="_blank">Continue reading</a>
        </div>
        <div class="col-md-4">
          <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
        </div>
      </div>
      </div>
    </div>
      `)
      for(var i = 1;i< news.results.length;i+=2){
        if(news.results[i].multimedia[0] == null){
          $('#thumbnail').append(`Placeholder`)
          $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
        }else{
          $('#main-content').append(`
          <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                <h3 class="mb-0">${news.results[i].title}</h3>
                <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                <p class="card-text mb-auto">${news.results[i].abstract}</p>
                <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                <h3 class="mb-0">${news.results[i-1].title}</h3>
                <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                <p class="mb-auto">${news.results[i-1].abstract}</p>
                <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
        </div>
      </div>
        `)
          }
          }
    }).catch((error) => {
    console.log(error);
    })
     }
})
$('#opinion').click((e) => {
  if($('#main-content').html() != ''){
    $('#main-content').empty()
      $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/opinion.json?",
        data: {
            "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
        }
    }).done((news) => {
      $('#header-content').html(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">${news.results[0].title}</h1>
          <p class="lead">${news.results[0].abstract}</p>
          <a href="${news.results[0].url}" target="_blank">Continue reading</a>
        </div>
        <div class="col-md-4">
          <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
        </div>
      </div>
      </div>
    </div>
      `)
      for(var i = 1;i< news.results.length;i+=2){
        if(news.results[i].multimedia[0] == null){
          $('#thumbnail').append(`Placeholder`)
          $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
        }else{
          $('#main-content').append(`
          <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                <h3 class="mb-0">${news.results[i].title}</h3>
                <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                <p class="card-text mb-auto">${news.results[i].abstract}</p>
                <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                <h3 class="mb-0">${news.results[i-1].title}</h3>
                <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                <p class="mb-auto">${news.results[i-1].abstract}</p>
                <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
        </div>
      </div>
        `)
          }
          }
          
    }).catch((error) => {
    console.log(error);
    })
     }
})
$('#sports').click((e) => {
  if($('#main-content').html() != ''){
    $('#main-content').empty()
      $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/sports.json?",
        data: {
            "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
        }
    }).done((news) => {
      $('#header-content').html(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">${news.results[0].title}</h1>
          <p class="lead">${news.results[0].abstract}</p>
          <a href="${news.results[0].url}" target="_blank">Continue reading</a>
        </div>
        <div class="col-md-4">
          <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
        </div>
      </div>
      </div>
    </div>
      `)
      for(var i = 1;i< news.results.length;i+=2){
        if(news.results[i].multimedia[0] == null){
          $('#thumbnail').append(`Placeholder`)
          $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
        }else{
          $('#main-content').append(`
          <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                <h3 class="mb-0">${news.results[i].title}</h3>
                <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                <p class="card-text mb-auto">${news.results[i].abstract}</p>
                <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                <h3 class="mb-0">${news.results[i-1].title}</h3>
                <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                <p class="mb-auto">${news.results[i-1].abstract}</p>
                <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
        </div>
      </div>
        `)
          }
          }
     
    }).catch((error) => {
    console.log(error);
    })
     }
})
$('#food').click((e) => {
  if($('#main-content').html() != ''){
    $('#main-content').empty()
      $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/food.json?",
        data: {
            "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
        }
    }).done((news) => {
      $('#header-content').html(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">${news.results[0].title}</h1>
          <p class="lead">${news.results[0].abstract}</p>
          <a href="${news.results[0].url}" target="_blank">Continue reading</a>
        </div>
        <div class="col-md-4">
          <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
        </div>
      </div>
      </div>
    </div>
      `)
      for(var i = 1;i< news.results.length;i+=2){
        if(news.results[i].multimedia[0] == null){
          $('#thumbnail').append(`Placeholder`)
          $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
        }else{
          $('#main-content').append(`
          <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                <h3 class="mb-0">${news.results[i].title}</h3>
                <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                <p class="card-text mb-auto">${news.results[i].abstract}</p>
                <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                <h3 class="mb-0">${news.results[i-1].title}</h3>
                <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                <p class="mb-auto">${news.results[i-1].abstract}</p>
                <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
        </div>
      </div>
        `)
          }
          }
     
    }).catch((error) => {
    console.log(error);
    })
     }
})
$('#travel').click((e) => {
  if($('#main-content').html() != ''){
    $('#main-content').empty()
      $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/travel.json?",
        data: {
            "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
        }
    }).done((news) => {
      $('#header-content').html(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">${news.results[0].title}</h1>
          <p class="lead">${news.results[0].abstract}</p>
          <a href="${news.results[0].url}" target="_blank">Continue reading</a>
        </div>
        <div class="col-md-4">
          <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
        </div>
      </div>
      </div>
    </div>
      `)
      for(var i = 1;i< news.results.length;i+=2){
        if(news.results[i].multimedia[0] == null){
          $('#thumbnail').append(`Placeholder`)
          $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
        }else{
          $('#main-content').append(`
          <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                <h3 class="mb-0">${news.results[i].title}</h3>
                <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                <p class="card-text mb-auto">${news.results[i].abstract}</p>
                <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                <h3 class="mb-0">${news.results[i-1].title}</h3>
                <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                <p class="mb-auto">${news.results[i-1].abstract}</p>
                <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
        </div>
      </div>
        `)
          }
          }
    
    }).catch((error) => {
    console.log(error);
    })
     }
})
$('#magazine').click((e) => {
  if($('#main-content').html() != ''){
    $('#main-content').empty()
      $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/magazine.json?",
        data: {
            "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
        }
    }).done((news) => {
      $('#header-content').html(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">${news.results[0].title}</h1>
          <p class="lead">${news.results[0].abstract}</p>
          <a href="${news.results[0].url}" target="_blank">Continue reading</a>
        </div>
        <div class="col-md-4">
          <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
        </div>
      </div>
      </div>
    </div>
      `)
      for(var i = 1;i< news.results.length;i+=2){
        if(news.results[i].multimedia[0] == null){
          $('#thumbnail').append(`Placeholder`)
          $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
        }else{
          $('#main-content').append(`
          <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                <h3 class="mb-0">${news.results[i].title}</h3>
                <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                <p class="card-text mb-auto">${news.results[i].abstract}</p>
                <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                <h3 class="mb-0">${news.results[i-1].title}</h3>
                <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                <p class="mb-auto">${news.results[i-1].abstract}</p>
                <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
        </div>
      </div>
        `)
          }
          }
        
    }).catch((error) => {
    console.log(error);
    })
     }
})
$('#arts').click((e) => {
  if($('#main-content').html() != ''){
    $('#main-content').empty()
      $.ajax({
        url:"https://api.nytimes.com/svc/topstories/v2/arts.json?",
        data: {
            "api-key":"M8A4xH77bXmp8Nlsg6KnX2FrReXGL4gA"
        }
    }).done((news) => {
      $('#header-content').html(`
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">${news.results[0].title}</h1>
          <p class="lead">${news.results[0].abstract}</p>
          <a href="${news.results[0].url}" target="_blank">Continue reading</a>
        </div>
        <div class="col-md-4">
          <img class="thumbnail" src="${news.results[0].multimedia[1].url}" width="100%" height="350px">
        </div>
      </div>
      </div>
    </div>
      `)
      for(var i = 1;i< news.results.length;i+=2){
        if(news.results[i].multimedia[0] == null){
          $('#thumbnail').append(`Placeholder`)
          $('#content').append(`<h4>${news.results[i].abstract}</h4>`)
        }else{
          $('#main-content').append(`
          <div class="row mb-2">
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${news.results[i].section}</strong>
                <h3 class="mb-0">${news.results[i].title}</h3>
                <div class="mb-1 text-muted">${news.results[i].created_date}</div>
                <p class="card-text mb-auto">${news.results[i].abstract}</p>
                <a href="${news.results[i].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-info">${news.results[i-1].section}</strong>
                <h3 class="mb-0">${news.results[i-1].title}</h3>
                <div class="mb-1 text-muted">${news.results[i-1].created_date}</div>
                <p class="mb-auto">${news.results[i-1].abstract}</p>
                <a href="${news.results[i-1].url}" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                      <img class="card-img-right flex-auto d-none d-md-block m-5" src="${news.results[i-1].multimedia[1].url}" width="100%" style="box-shadow:10px 10px 5px #aaaaaa">
              </div>
            </div>
          </div>
        </div>
      </div>
        `)
          }
          }
        
          
    }).catch((error) => {
    console.log(error);
    })
     }
})
})
