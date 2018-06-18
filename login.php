<?php 
class book{
	var $price;
	var $title = 500;
	function setPrice($value){
		$this->price = $value;
	}
	function getPrice(){
		echo "hello";
	}
}
class novel extends book{
	var $noveTitle;
	function setTitle(){
		$this->noveTitle = $this->title;
	}
	function getTitle(){
		echo $this->noveTitle;
	}
}
$sts = new novel;
$sts->setPrice(350);
echo $sts->getPrice();
 ?>
