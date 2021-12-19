<?php



if(isset($_POST)){
   
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$website=$_POST['website'];
$msg=$_POST['msg'];


       if(!empty($email) && !empty($msg)){// email and message filedss are not empty
        
            if(filter_var($email,FILTER_VALIDATE_EMAIL)){
                $receiver="nethmiwelgamvilaneo@gmail.com"; //email receive mail address
                $subject="from: $name <$email>"; //subject of the email. subject look like from:CodinNepal <abc.gemail.com>
                //merging concating all user values inside body variables. \n is used to line break
                $body="Name:$name \n Email: $email \n Phone: $phone \n Website: $website";
                $sender="From: $email";  //sender email
                       
                if(mail($receiver, $subject , $body, $sender)){

                    echo "Your message has been sent";
                        }
                else{
                    echo "Sorry fail to send your message";
                }

            }else{
                echo "Enter a Valid Email address";
            }

        }

        else{
            echo 'email and message is required';
        }

}
else{
    echo 'ki';
}

?>