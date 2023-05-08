
<?php
header('Content-type: application/javascript');

$data = [
    ['Name' => 'Kode With Klossy', 'Company' => 'Kode With Klossy', 'EventType' => 'Summer Day Camp', 'AgeGroup' => 'Teens', 'Link' => 'https://www.kodewithklossy.com/'],
    ['Name' => 'Rewriting the Code', 'Company' => 'Rewriting the Code', 'EventType' => 'Network', 'AgeGroup' => 'College', 'Link' => 'https://rewritingthecode.org/'],
    ['Name' => 'Women Who Code', 'Company' => 'Women Who Code', 'EventType' => 'Network', 'AgeGroup' => 'Any', 'Link' => 'https://women-in-technology-wit.web.app/organisation'],
	['Name' => 'Women in Technology', 'Company' => 'Women in Technology', 'EventType' => 'Network', 'AgeGroup' => 'Any', 'Link' => 'https://mywit.org/'],
    ['Name' => 'Learn Coding: The Ultimate Guide For Beginners', 'Company' => 'Girls Teaching Girls to Code', 'EventType' => 'Guide', 'AgeGroup' => 'College', 'Link' => 'https://www.codingdeeply.com/learn-coding/'],
    ['Name' => 'Black Girls Who Code', 'Company' => 'Black Girls Who Code', 'EventType' => 'Bootcamp', 'AgeGroup' => 'Any', 'Link' => 'https://wearebgc.org/'],
	['Name' => 'SheCodes', 'Company' => 'SheCodes', 'EventType' => 'Bootcamp', 'AgeGroup' => 'Adult', 'Link' => 'https://www.shecodes.io/'],
    ['Name' => 'Pearl Hacks', 'Company' => 'Major League Hacking', 'EventType' => 'Hackathon', 'AgeGroup' => 'Young Adult', 'Link' => 'https://pearlhacks.com/'],
    ['Name' => 'Diamond Hack', 'Company' => 'NC States Women in Computer Science', 'EventType' => 'Hackathon', 'AgeGroup' => 'Young Adult', 'Link' => 'https://www.ncsudiamondhacks.com/'],
	['Name' => 'She Hacks', 'Company' => 'Major League Hacking', 'EventType' => 'Hackathon', 'AgeGroup' => 'Any', 'Link' => 'https://shehacks.com'],
    ['Name' => 'Ladies Hacks', 'Company' => 'Major League Hacking', 'EventType' => 'Hackathon', 'AgeGroup' => 'Young Adult', 'Link' => 'https://ladieshack.com'],
    ['Name' => 'Girls United', 'Company' => 'CodeNinjas', 'EventType' => 'Summer Camp', 'AgeGroup' => 'Kids', 'Link' => 'https://codeninjas.org/girls_united'],
	['Name' => 'She is the World', 'Company' => 'Major League Hacking', 'EventType' => 'Hackathon', 'AgeGroup' => 'Teens', 'Link' => 'https://sheistheworld.com/'],
    ['Name' => 'Girl Hackathon', 'Company' => 'Google', 'EventType' => 'Hackathon', 'AgeGroup' => 'Any', 'Link' => 'https://buildyourfuture.withgoogle.com/programs/girl-hackathon'],
    ['Name' => 'WicHacks', 'Company' => 'RIT', 'EventType' => 'Hackathon', 'AgeGroup' => 'Young Adult', 'Link' => 'http://wichacks.io/'],
	['Name' => 'FemmeHacks', 'Company' => 'University of Pennsylvania', 'EventType' => 'Hackathon', 'AgeGroup' => 'Any', 'Link' => 'https://femmehacks.io/'],
    ['Name' => 'Grace Hopper', 'Company' => 'nita Borg Institute for Women and Technology', 'EventType' => 'Coference', 'AgeGroup' => 'Any', 'Link' => 'https://ghc.anitab.org/'],
];

$callback = $_GET['callback'];

$json = json_encode($data);

echo $callback . '(' . $json . ');';
?>

