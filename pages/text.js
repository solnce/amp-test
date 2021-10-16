export default () => (
<html>
<body>
<script
  src="https://code.jquery.com/jquery-3.4.0.min.js"
  integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="
  crossorigin="anonymous"></script>

  <script>

  var url = 'https://dev-location.api.travelbook.co.jp/api/v1/locations?extras=name,type&location_ids=6001';  //  ここにCORSを叩きたいURLを記入

  $.ajax(url,
    {
      dataType: "json",
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa("g:j"));
      }
    })
  .done((data) => {
    console.log(data);
  })
  .fail( (data) => {
    console.log(data);
  });
  </script>
</body>
</html>
)