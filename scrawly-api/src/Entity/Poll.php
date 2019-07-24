<?php
namespace App\Entity;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
/**
 * @ApiResource(normalizationContext={"groups"={"poll"}})
 * @ApiFilter(SearchFilter::class, properties={"slug": "exact"})
 * @ORM\Entity(repositoryClass="App\Repository\PollRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Poll
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
    private $title;
    /**
     * @Groups({"poll"})
     * @ORM\Column(type="string", length=255)
     */
    private $slug;
    /**
     * @Groups({"poll"})
     * @ORM\Column(type="datetime")
     */
    private $createdAt;
    /**
     * @Groups({"poll"})
     * @ORM\OneToMany(targetEntity="App\Entity\Person", mappedBy="poll")
     */
    private $person;
    /**
     * @Groups({"poll"})
     * @ORM\OneToMany(targetEntity="App\Entity\Choice", mappedBy="poll")
     */
    private $choices;
    public function __construct()
    {
        $this->person = new ArrayCollection();
        $this->choices = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getTitle(): ?string
    {
        return $this->title;
    }
    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }
    public function getSlug(): ?string
    {
        return $this->slug;
    }
    public function setSlug(string $slug): self
    {
        $this->slug = $slug;
        return $this;
    }
    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }
    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;
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
            $person->setPoll($this);
        }
        return $this;
    }
    public function removePerson(Person $person): self
    {
        if ($this->person->contains($person)) {
            $this->person->removeElement($person);
            // set the owning side to null (unless already changed)
            if ($person->getPoll() === $this) {
                $person->setPoll(null);
            }
        }
        return $this;
    }
    /**
     * @return Collection|Choice[]
     */
    public function getChoices(): Collection
    {
        return $this->choices;
    }
    public function addChoice(Choice $choice): self
    {
        if (!$this->choices->contains($choice)) {
            $this->choices[] = $choice;
            $choice->setPoll($this);
        }
        return $this;
    }
    public function removeChoice(Choice $choice): self
    {
        if ($this->choices->contains($choice)) {
            $this->choices->removeElement($choice);
            // set the owning side to null (unless already changed)
            if ($choice->getPoll() === $this) {
                $choice->setPoll(null);
            }
        }
        return $this;
    }
    /**
     * @ORM\PrePersist()
     */
    public function PrePersist(){
        $this->setCreatedAt(new \DateTime());
    }
}