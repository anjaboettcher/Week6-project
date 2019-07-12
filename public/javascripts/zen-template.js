module.exports = {
    zenEmailTemplate: (username, title, description, additional, logo, image, allLinks) => 
    { return `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>
      Hello world
    </title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a { padding:0; }
      .ReadMsgBody { width:100%; }
      .ExternalClass { width:100%; }
      .ExternalClass * { line-height:100%; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
      p { display:block;margin:13px 0; }
    </style>
    <!--[if !mso]><!-->
    <style type="text/css">
      @media only screen and (max-width:480px) {
        @-ms-viewport { width:320px; }
        @viewport { width:320px; }
      }
    </style>
    <!--<![endif]-->
    <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
      .outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
    
  <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,500" rel="stylesheet" type="text/css">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Roboto:300,500);
    </style>
  <!--<![endif]-->


    
<style type="text/css">
  @media only screen and (min-width:480px) {
    .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-45 { width:45% !important; max-width: 45%; }
.mj-column-per-89 { width:89% !important; max-width: 89%; }
.mj-column-per-75 { width:75% !important; max-width: 75%; }
  }
</style>


    <style type="text/css">
    
    

@media only screen and (max-width:480px) {
  table.full-width-mobile { width: 100% !important; }
  td.full-width-mobile { width: auto !important; }
}

    </style>
    
    
  </head>
  <body>
    
    
  <div
     style=""
  >
    
  
  <!--[if mso | IE]>
  <table
     align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
  >
    <tr>
      <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->

  
  <div  style="Margin:0px auto;max-width:600px;">
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
    >
      <tbody>
        <tr>
          <td
             style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"
          >
            <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            
    <tr>
  
    </tr>
  
              </table>
            <![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
  <!--[if mso | IE]>
      </td>
    </tr>
  </table>
  
  <table
     align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
  >
    <tr>
      <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->

  
  <div  style="Margin:0px auto;max-width:600px;">
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
    >
      <tbody>
        <tr>
          <td
             style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"
          >
            <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            
    <tr>
  
        <td
           class="" style="vertical-align:top;width:600px;"
        >
      <![endif]-->
        
  <div
     class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  >
    
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
  >
    
        <tr>
          <td
             align="center" style="font-size:0px;padding:0px;word-break:break-word;"
          >
            
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
  >
    <tbody>
      <tr>
        <td  style="width:100px;">
          
  <img
     height="auto" src="${logo}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="40"
  />

        </td>
      </tr>
    </tbody>
  </table>

          </td>
        </tr>
      
  </table>

  </div>

      <!--[if mso | IE]>
        </td>
      
    </tr>
  
              </table>
            <![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
  <!--[if mso | IE]>
      </td>
    </tr>
  </table>
  
  <table
     align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
  >
    <tr>
      <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->

  
  <div  style="Margin:0px auto;max-width:600px;">
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
    >
      <tbody>
        <tr>
          <td
             style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"
          >
            <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            
    <tr>
  
        <td
           class="" style="vertical-align:top;width:270px;"
        >
      <![endif]-->
        
  <div
     class="mj-column-per-45 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  >
    
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
  >
    
        <tr>
          <td
             align="center" style="font-size:0px;padding:10px 25px;padding-top:40px;word-break:break-word;"
          >
            
  <div
     style="font-family:Roboto, Helvetica, sans-serif;font-size:18px;font-weight:500;line-height:24px;text-align:center;color:#616161;"
  >
    ${title}
  </div>

          </td>
        </tr>
      
        <tr>
          <td
             style="font-size:0px;padding:10px 25px;word-break:break-word;"
          >
            
  <p
     style="border-top:solid 2px #616161;font-size:1;margin:0px auto;width:100%;"
  >
  </p>
  
  <!--[if mso | IE]>
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #616161;font-size:1;margin:0px auto;width:220px;" role="presentation" width="220px"
    >
      <tr>
        <td style="height:0;line-height:0;">
          &nbsp;
        </td>
      </tr>
    </table>
  <![endif]-->


          </td>
        </tr>
      
        <tr>
          <td
             style="font-size:0px;padding:10px 25px;word-break:break-word;"
          >
            
  <p
     style="border-top:solid 2px #616161;font-size:1;margin:0px auto;width:45%;"
  >
  </p>
  
  <!--[if mso | IE]>
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #616161;font-size:1;margin:0px auto;width:71.5px;" role="presentation" width="71.5px"
    >
      <tr>
        <td style="height:0;line-height:0;">
          &nbsp;
        </td>
      </tr>
    </table>
  <![endif]-->


          </td>
        </tr>
      
  </table>

  </div>

      <!--[if mso | IE]>
        </td>
      
    </tr>
  
              </table>
            <![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
  <!--[if mso | IE]>
      </td>
    </tr>
  </table>
  
  <table
     align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
  >
    <tr>
      <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->

  
  <div  style="Margin:0px auto;max-width:600px;">
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
    >
      <tbody>
        <tr>
          <td
             style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"
          >
            <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            
    <tr>
  
        <td
           class="" style="vertical-align:top;width:600px;"
        >
      <![endif]-->
        
  <div
     class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  >
    
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
  >
    
        <tr>
          <td
             align="center" style="font-size:0px;padding:0px;word-break:break-word;"
          >
            
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
  >
    <tbody>
      <tr>
        <td  style="width:400px;">
          
  <img
     height="auto" src="${image}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="150"
  />

        </td>
      </tr>
    </tbody>
  </table>

          </td>
        </tr>
      
        <tr>
          <td
             align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
          >
            
  <div
     style="font-family:Roboto, Helvetica, sans-serif;font-size:16px;font-weight:300;line-height:24px;text-align:left;color:#616161;"
  >
    <p> ${description} </p>
      <p> ${additional} </p>
      ${allLinks}
  </div>

          </td>
        </tr>
      
  </table>

  </div>

      <!--[if mso | IE]>
        </td>
      
    </tr>
  
              </table>
            <![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
  <!--[if mso | IE]>
      </td>
    </tr>
  </table>
  
  <table
     align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
  >
    <tr>
      <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->

  
  <div  style="Margin:0px auto;max-width:600px;">
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
    >
      <tbody>
        <tr>
          <td
             style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"
          >
            <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            
    <tr>
  
        <td
           class="" style="vertical-align:top;width:534px;"
        >
      <![endif]-->
        
  <div
     class="mj-column-per-89 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  >
    
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
  >
    
        <tr>
          <td
             align="left" style="font-size:0px;padding:0 25px;word-break:break-word;"
          >
            
  <div
     style="font-family:Roboto, Helvetica, sans-serif;font-size:16px;font-weight:300;line-height:24px;text-align:left;color:#616161;"
  >
    <p style="color:#BDBDBD; line-height: 9px"> Cumps, </p>
      <p style="font-style: italic; color:#BDBDBD; line-height: 9px"> ${username} </p>
  </div>

          </td>
        </tr>
      
  </table>

  </div>

      <!--[if mso | IE]>
        </td>
      
    </tr>
  
              </table>
            <![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
  <!--[if mso | IE]>
      </td>
    </tr>
  </table>
  
  <table
     align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
  >
    <tr>
      <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->

  
  <div  style="Margin:0px auto;max-width:600px;">
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
    >
      <tbody>
        <tr>
          <td
             style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"
          >
            <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            
    <tr>
  
        <td
           class="" style="vertical-align:top;width:600px;"
        >
      <![endif]-->
        
  <div
     class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  >
    
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
  >
    
        <tr>
          <td
             style="font-size:0px;padding:10px 25px;word-break:break-word;"
          >
            
  <p
     style="border-top:solid 1px #E0E0E0;font-size:1;margin:0px auto;width:100%;"
  >
  </p>
  
  <!--[if mso | IE]>
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #E0E0E0;font-size:1;margin:0px auto;width:550px;" role="presentation" width="550px"
    >
      <tr>
        <td style="height:0;line-height:0;">
          &nbsp;
        </td>
      </tr>
    </table>
  <![endif]-->


          </td>
        </tr>
      
  </table>

  </div>

      <!--[if mso | IE]>
        </td>
      
    </tr>
  
              </table>
            <![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
  <!--[if mso | IE]>
      </td>
    </tr>
  </table>
  
  <table
     align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
  >
    <tr>
      <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->

  
  <div  style="Margin:0px auto;max-width:600px;">
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
    >
      <tbody>
        <tr>
          <td
             style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"
          >
            <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            
    <tr>
  
        <td
           class="" style="vertical-align:top;width:450px;"
        >
      <![endif]-->
        
  <div
     class="mj-column-per-75 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  >
    
  <table
     border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
  >
    
        <tr>
          <td
             align="center" style="font-size:0px;padding:0px;word-break:break-word;"
          >
            
  <div
     style="font-family:Roboto, Helvetica, sans-serif;font-size:16px;font-weight:300;line-height:24px;text-align:center;color:#616161;"
  >
    <p style="font-size: 10px">Not a user yet? Become a <a href="https://zen-ironhack-project.herokuapp.com" style="color: #3498DB;">
          member 
        </a> now!</a></p>
  </div>

          </td>
        </tr>
      
  </table>

  </div>

      <!--[if mso | IE]>
        </td>
      
    </tr>
  
              </table>
            <![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
  <!--[if mso | IE]>
      </td>
    </tr>
  </table>
  <![endif]-->


  </div>

  </body>
</html>
`}
}