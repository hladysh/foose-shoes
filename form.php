  <?php  
  if(empty($_POST["email"]))  {  
  }  
  else  {  
    if(file_exists('js/data-form.json'))  
    {  
      $current_data = file_get_contents('js/data-form.json');  
      $array_data = json_decode($current_data, true);  
      $extra = array(  
        'email'               =>     $_POST['email'],  
        );  
      $array_data[] = $extra;  
      $final_data = json_encode($array_data);  
      if(file_put_contents('js/data-form.json', $final_data))  
      {   
       header("Location: index.html");
     }  
   }  
   else {  
    $error = 'JSON File not exits';  
  }  
}  
?>  
