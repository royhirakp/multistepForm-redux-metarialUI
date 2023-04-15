

function ValidateEmail(mail) 
{
 if ( /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(mail))
  {
    return (true)
  }
    return (false)
}



let obj = {
    ValidateEmail
}

export default obj





