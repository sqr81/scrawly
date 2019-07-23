<?php

namespace App\DataFixtures;

use App\Entity\Choice;
use App\Entity\Person;
use App\Entity\Poll;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        /**
         * Poll
         */
        $poll1 =  new Poll();
        $poll1-> setTitle("aniv yann");
        $poll1-> setSlug("anniv-yann");
        $poll1-> setCreatedAt(new \DateTime('2019-08-18 T10:00:00'));
        $manager->persist ($poll1);
        /**
         * Person
         */
        $person1 = new Person();
        $person1->setUsername("Nicolas Hermange");
        $person1->setEmail("nicolas@gmail.com");
        $person1->setPoll($poll1);
        $manager->persist ($person1);

        $person2 = new Person();
        $person2->setUsername("Jhon Doe");
        $person2->setEmail("jhon@gmail.com");
        $person2->setPoll($poll1);
        $manager->persist ($person2);
        /**
         * choice
         */
        $choice1 = new choice();
        $choice1-> setDate(new \DateTime('2019-10-18'));
        $choice1-> setPoll($poll1);
        $choice1->addPerson($person1);
        $choice1->addPerson($person2);
        $manager->persist ($choice1);

        $choice2 = new choice();
        $choice2-> setDate(new \DateTime('2019-10-18'));
        $choice2-> setPoll($poll1);
        $choice2->addPerson($person1);
        $choice2->addPerson($person2);
        $manager->persist ($choice2);
        $manager->flush();
    }
}