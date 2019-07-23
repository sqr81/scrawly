<?php
namespace App\Entity;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\PersonRepository")
 */
class Person
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @Groups({"poll"})
     * @ORM\Column(type="string", length=255)
     */
    private $username;
    /**
     * @Groups({"poll"})
     * @ORM\Column(type="string", length=255)
     */
    private $email;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Poll")
     * @ORM\JoinColumn(nullable=false)
     */
    private $poll;
    /**
     * @Groups({"poll"})
     * @ORM\ManyToMany(targetEntity="App\Entity\Choice", inversedBy="person")
     */
    private $choice;
    public function __construct()
    {
        $this->choice = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getUsername(): ?string
    {
        return $this->username;
    }
    public function setUsername(string $username): self
    {
        $this->username = $username;
        return $this;
    }
    public function getEmail(): ?string
    {
        return $this->email;
    }
    public function setEmail(string $email): self
    {
        $this->email = $email;
        return $this;
    }
    public function getPoll(): ?Poll
    {
        return $this->poll;
    }
    public function setPoll(?Poll $poll): self
    {
        $this->poll = $poll;
        return $this;
    }
    /**
     * @return Collection|choice[]
     */
    public function getChoice(): Collection
    {
        return $this->choice;
    }
    public function addChoice(choice $choice): self
    {
        if (!$this->choice->contains($choice)) {
            $this->choice[] = $choice;
        }
        return $this;
    }
    public function removeChoice(choice $choice): self
    {
        if ($this->choice->contains($choice)) {
            $this->choice->removeElement($choice);
        }
        return $this;
    }
}