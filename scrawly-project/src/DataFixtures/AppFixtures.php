<?php

namespace App\DataFixtures;
use App\Entity\Person;
use App\Entity\Poll;
use App\Entity\Choice;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        /**
         * Poll
         */
        $poll = new Poll();
        $poll->setTitle("Exemple de Poll");
        $poll->setSlug("exemple-de-poll");
        $poll->setCreatedAt(new \DateTime('2019-08-18T10:00:00'));
        $manager->persist($poll);
        /**
         * Person
         */
        $person1 = new Person();
        $person1->setUsername("Homer");
        $person1->setEmail("homersimpsons@gmail.com");
        $person1->setPoll($poll);
        $manager->persist($person1);
        $person2 = new Person();
        $person2->setUsername("Bart");
        $person2->setEmail("bartsimpsons@gmail.com");
        $person2->setPoll($poll);
        $manager->persist($person2);
        $person3 = new Person();
        $person3->setUsername("Krusty");
        $person3->setEmail("krusty@gmail.com");
        $person3->setPoll($poll);
        $manager->persist($person3);
        /**
         * Choice
         */
        $choice1 = new Choice();
        $choice1->setDate(new \DateTime('2019-08-17'));
        $choice1->setPoll($poll);
        $choice1->addPerson($person1);
        $choice1->addPerson($person2);
        $manager->persist($choice1);
        $choice2 = new Choice();
        $choice2->setDate(new \DateTime('2019-08-17'));
        $choice2->setPoll($poll);
        $choice2->addPerson($person1);
        $choice2->addPerson($person2);
        $manager->persist($choice2);
        $manager->flush();
    }
}
