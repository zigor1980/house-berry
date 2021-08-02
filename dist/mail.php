<?php
    try {
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $work = $_POST['work'];

        if (trim($name) && trim($phone) && trim($work)) {
            mail("house.berry@bk.ru", "Заявка с сайта", "Имя:".$name.".\r\n Телефон: ".$phone."\r\n"."Тип работ: ".$work."\r\n"); 
            echo 'Заявка отправлена';
        } else {
            throw new ErrorException("Empty fields");
        }
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
?>