### **Probability**

At its core, **probability** is simply the mathematical way of measuring how likely it is that a specific event will happen.

Every probability is a number between **0 and 1** (or 0% to 100%).

- **0** means the event is completely impossible.
    
- **1** means the event is absolutely certain to happen.
    

![probability scale from 0 to 1 impossible to certain, AI generated](https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTRm5kZCZ2NibDLBkxSPTUIlTxnoTvolueJ1lK6Z9oPEoUOP2yDi69YV0FAsXevp0EQcj803SjfPpENSGynl9qlKZao5ciiy3yOVRorsZPyC2CCLFM)


Whenever you are trying to calculate the theoretical probability of a single event, you use one fundamental formula.

### The Formula

$$P(E) = \frac{\text{Number of Favorable Outcomes}}{\text{Total Number of Possible Outcomes}}$$

- **$P(E)$** = The probability of event "E" happening.
    
- **Favorable Outcomes** = The specific results you are looking for (the "successes").
    
- **Total Outcomes** = Every single thing that could possibly happen.
    

---

### Example Scenario: Rolling a Die

Let's look at a classic example: rolling a standard 6-sided die. What is the probability of rolling an **even number**?

**Step 1: Find the Total Number of Possible Outcomes**

When you roll a die, there are exactly 6 possible numbers that can land face up: 1, 2, 3, 4, 5, or 6.

- Total Outcomes = **6**
    

**Step 2: Find the Number of Favorable Outcomes**

We are looking specifically for an _even_ number. The even numbers on a die are 2, 4, and 6. That gives us 3 "winning" numbers.

- Favorable Outcomes = **3**
    

**Step 3: Plug into the Formula**

$$P(\text{Even}) = \frac{3}{6}$$

**Step 4: Simplify**

$$P(\text{Even}) = \frac{1}{2} = 0.5$$

The probability of rolling an even number is **0.5**, or **50%**.

---

### How Combinations and Permutations Fit In

In the dice example, it was easy to just count the outcomes on our fingers. But what if the problem is: _"What is the probability of drawing exactly 3 Kings from a standard deck of 52 cards?"_

You can't easily count all the ways to draw 3 cards from a deck. That is exactly where the **Combination** formula you just learned comes to the rescue! You would use the Combination formula once to find your "Total Possible Outcomes" ($C(52, 3)$) and another time to find your "Favorable Outcomes" ($C(4, 3)$), and then just divide them.

---

Now that you have the foundation, would you like to see how to calculate the probability of multiple events happening one after another (like rolling a die _and then_ flipping a coin) using the **Multiplication Rule of Probability**?

---

You are asking exactly the right questions to build a solid foundation in probability! To understand the rule for a sequence of events, we first need to define what a "disjoint" event actually is.

### 1. What are Disjoint Events?

**Disjoint events** (also known as **mutually exclusive events**) are events that cannot possibly happen at the exact same time. If one event happens, the other is completely locked out from happening.

- **Mathematical Definition:** The probability of both occurring together is zero: $P(A \cap B) = 0$.
    
- **Simple Example:** Think about flipping a coin. You can get Heads (Event A) or you can get Tails (Event B). You cannot get _both_ Heads and Tails on a single flip. Therefore, getting Heads and getting Tails are disjoint events.
    

---

### 2. Probability of a Sequence of Disjoint Events

When you are dealing with classical probability and you want to find the probability that _any one_ event out of a sequence of disjoint events will happen (meaning Event A happens, **OR** Event B happens, **OR** Event C happens...), you simply **add** their individual probabilities together.

Because there is zero overlap between the events, you don't have to worry about accidentally counting anything twice.

- **The Formula:**
    
    If $A_1, A_2, \dots, A_n$ are mutually disjoint events, then:
    
    $$P(A_1 \cup A_2 \cup \dots \cup A_n) = P(A_1) + P(A_2) + \dots + P(A_n)$$
    
    _(Remember, the $\cup$ symbol means "Union," which we read as "OR" in probability)._
    

---

### Example Scenario

Let's look at drawing a single card from a standard deck of **52 cards**.

What is the probability of drawing a **Heart**, a **Club**, OR the **Ace of Spades**?

**Step 1: Verify the events are disjoint**

- Event $A$: Drawing a Heart.
    
- Event $B$: Drawing a Club.
    
- Event $C$: Drawing the Ace of Spades.
    
    Can a single card be a Heart _and_ a Club? No. Can a single card be a Club _and_ the Ace of Spades? No. These events are mutually disjoint.
    

**Step 2: Find the individual probabilities**

- $P(A)$ = There are 13 Hearts, so $\frac{13}{52}$
    
- $P(B)$ = There are 13 Clubs, so $\frac{13}{52}$
    
- $P(C)$ = There is exactly 1 Ace of Spades, so $\frac{1}{52}$
    

**Step 3: Plug into the formula and add**

$$P(A \cup B \cup C) = P(A) + P(B) + P(C)$$

$$P(A \cup B \cup C) = \frac{13}{52} + \frac{13}{52} + \frac{1}{52}$$

$$P(A \cup B \cup C) = \frac{27}{52}$$

**Step 4: Convert to a decimal/percentage**

$$\frac{27}{52} \approx 0.519$$

There is roughly a **51.9%** chance of drawing a Heart, a Club, or the Ace of Spades.

---

We have used the word "OR" quite a bit here, which triggers addition. Would you like to look at **Independent Events** next, which uses the word "AND" and introduces the Multiplication Rule of Probability?

----

So far, we have looked at events in isolation. But in the real world, events are often linked. Sometimes, knowing that one thing happened completely changes the odds of another thing happening.

Here is the beginner-friendly breakdown of how events interact using **Conditional Probability** and **Independent Events**.

---

### 1. Conditional Probability (When Events are Linked)

Conditional probability is the probability of an event happening **given that** another event has already happened. It essentially shrinks your "total possible outcomes" down to a smaller universe based on new information.

- **The Notation:** $P(A|B)$
    
    _(Read as: "The probability of Event A, given Event B")._
    
- **The Formula:**
    
    $$P(A|B) = \frac{P(A \cap B)}{P(B)}$$
    
    - $P(A \cap B)$ = The probability of both happening together.
        
    - $P(B)$ = The probability of the condition that already happened.
        

![tree diagram showing conditional probability, AI generated](https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTi1fWorZ-AfbFqESW1lYLEat9EBicoud6FGHmWHnB5Cl7SM1NrhJ-1TcwtXy7T-eRS6y8tyg5NDXjKYSKB_Z6LVSaHyUrrz1iNzopRxxPHCsleNHA)

Shutterstock

**Example Scenario: Drawing Cards Without Replacement**

Imagine you have a standard deck of 52 cards.

- **Event B:** You draw a King on your first turn. The probability is $\frac{4}{52}$.
    
- **Event A:** You draw a King on your second turn.
    

If you don't put the first card back, what is $P(A|B)$ (the probability of drawing a King on the second turn, _given that_ you already drew one on the first turn)?

Because you already took a King out, there are only **3 Kings left**, and only **51 cards left** in the deck.

- $$P(A|B) = \frac{3}{51}$$
    

The first event directly changed the probability of the second event! Because they affect each other, these are called **Dependent Events**.

---

### 2. Independent Events (When Events Don't Care About Each Other)

Two events are **independent** if the outcome of one has absolutely zero effect on the outcome of the other. Knowing that Event B happened gives you no new information about Event A.

- **The Mathematical Definition:** If events are independent, the conditional probability is just the exact same as the normal probability.
    
    $$P(A|B) = P(A)$$
    
- **The Multiplication Rule ("AND" Rule):** If you want to find the probability of Event A **AND** Event B both happening, you simply multiply their individual probabilities together.
    
    $$P(A \cap B) = P(A) \cdot P(B)$$
    

**Example Scenario: Flipping a Coin and Rolling a Die**

You flip a standard coin and roll a 6-sided die. What is the probability of getting **Heads AND rolling a 4**?

Does the coin landing on Heads magically change the physics of the die? No. These are completely independent events.

**Step 1: Find the individual probabilities**

- $P(\text{Heads}) = \frac{1}{2}$
    
- $P(\text{Rolling a 4}) = \frac{1}{6}$
    

**Step 2: Multiply them together**

$$P(\text{Heads} \cap 4) = P(\text{Heads}) \cdot P(4)$$

$$P(\text{Heads} \cap 4) = \frac{1}{2} \cdot \frac{1}{6}$$

$$P(\text{Heads} \cap 4) = \frac{1}{12}$$

There is exactly a **1 in 12 chance** (about 8.3%) of getting both Heads and a 4.

---

We just looked at finding $P(A|B)$. Would you like to see **Bayes' Theorem** next, which is a famous formula that lets you magically reverse this to find $P(B|A)$ when you only have limited information?

---

This is where probability gets incredibly powerful. You are stepping into the realm of "reverse engineering" probabilities.

To understand Bayes' Theorem (also called Bayes' Rule—they are the exact same thing), we first have to understand the **Law of Total Probability**, because it actually makes up the bottom half of Bayes' formula!

Here is a beginner-friendly breakdown of both concepts.

---

### 1. The Law of Total Probability

Sometimes, an event can happen in several different, mutually exclusive ways. The Law of Total Probability tells us that to find the overall chance of an event happening, we have to look at every possible "path" that leads to that event, calculate the probability of each path, and add them all together.

- **The Formula:**
    
    If an event $A$ can happen under several different scenarios ($B_1, B_2, B_3$, etc.), then:
    
    $$P(A) = P(A|B_1)P(B_1) + P(A|B_2)P(B_2) + \dots$$
    
    _(In plain English: "The chance of A happening via path 1" PLUS "The chance of A happening via path 2", etc.)_
    

**Example Scenario: The Factory Defect**

A tech company has two factories making the exact same smartphone.

- **Factory X** produces **60%** of the phones. Their defect rate is **1%**.
    
- **Factory Y** produces **40%** of the phones. Their defect rate is **2%**.
    

If you pick a phone at random from the warehouse, what is the total probability that it is defective ($P(Defect)$)?

**Step 1: Calculate the paths**

- **Path 1 (From Factory X):** The chance it came from X ($0.60$) multiplied by the chance it's defective _given_ it came from X ($0.01$).
    
    - $0.60 \cdot 0.01 = 0.006$
        
- **Path 2 (From Factory Y):** The chance it came from Y ($0.40$) multiplied by the chance it's defective _given_ it came from Y ($0.02$).
    
    - $0.40 \cdot 0.02 = 0.008$
        

**Step 2: Add the paths together**

$$P(\text{Defect}) = 0.006 + 0.008 = 0.014$$

The total probability of pulling a defective phone is **0.014**, or **1.4%**.

---

### 2. Bayes' Theorem (Bayes' Rule)

Bayes' Theorem is essentially a time machine. It allows you to **update your beliefs based on new evidence**.

Normally, we know the probability of an effect given a cause—like knowing the probability a phone is defective _given_ it came from Factory Y ($P(\text{Defect}|\text{Factory Y})$). But what if you buy a phone, open the box, and see it is already broken? Now you want to work backwards. You want to know the probability it came from Factory Y _given_ that it is defective ($P(\text{Factory Y}|\text{Defect})$).

Bayes flips the condition around.

- **The Formula:**
    
    $$P(B|A) = \frac{P(A|B) \cdot P(B)}{P(A)}$$
    
    - **$P(B|A)$**: What we want to find (Probability of the cause, given the effect).
        
    - **$P(A|B)$**: The likelihood (Probability of the effect, given the cause).
        
    - **$P(B)$**: The prior (The baseline probability of the cause happening).
        
    - **$P(A)$**: The total probability of the effect happening (This is where you plug in the **Law of Total Probability**!).
        

**Example Scenario: Reversing the Factory Problem**

Let's continue the exact same example. You bought a phone. It is broken (the "Defect" event has definitely happened). What is the probability it was manufactured in **Factory Y**?

**Step 1: Identify the pieces for Bayes' Formula**

- **$P(A|B)$**: The probability of a defect _given_ Factory Y = **0.02**
    
- **$P(B)$**: The baseline probability of a phone coming from Factory Y = **0.40**
    
- **$P(A)$**: The total probability of a defect. We already calculated this using the Law of Total Probability! = **0.014**
    

**Step 2: Plug into Bayes' Theorem**

$$P(\text{Factory Y}|\text{Defect}) = \frac{0.02 \cdot 0.40}{0.014}$$

$$P(\text{Factory Y}|\text{Defect}) = \frac{0.008}{0.014}$$

$$P(\text{Factory Y}|\text{Defect}) \approx 0.571$$

### The Result

Even though Factory Y only makes 40% of the total phones, if you are holding a broken phone, there is a **57.1%** chance that it came from Factory Y. We used the new evidence (the phone is broken) to completely update our understanding of where it came from!

---

The most famous (and surprising) real-world application of Bayes' Theorem is in medical testing, specifically involving "false positives." Would you like to walk through a medical testing example, or are you ready to move on to **Probability Distributions** (like the Binomial or Normal distribution)?