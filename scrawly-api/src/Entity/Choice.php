<?php
namespace App\Entity;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\ChoiceRepository")
 */
class Choice
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @Groups({"poll"})
     * @ORM\Column(type="datetime")
     */
    private $date;
    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Person", mappedBy="choice")
     */
    private $person;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Poll")
     * @ORM\JoinColumn(nullable=false)
     */
    private $poll;
    public function __construct()
    {
        $this->person = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }
    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;
        return $this;
    }
    /**
     * @return Collection|Person[]
     */
    public function getPerson(): Collection
    {
        return $this->person;
    }
    public function addPerson(Person $person): self
    {
        if (!$this->person->contains($person)) {
            $this->person[] = $person;
            $person->addChoice($this);
        }
        return $this;
    }
    public function removePerson(Person $person): self
    {
        if ($this->person->contains($person)) {
            $this->person->removeElement($person);
            $person->removeChoice($this);
        }
        return $this;
    }
    public function getPoll(): ?poll
    {
        return $this->poll;
    }
    public function setPoll(?poll $poll): self
    {
        $this->poll = $poll;
        return $this;
    }
}