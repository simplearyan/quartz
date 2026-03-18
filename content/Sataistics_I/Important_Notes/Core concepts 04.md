
Imagine you are looking at a menu at a restaurant. Instead of listing food and prices, it lists **every single possible outcome** of an event and exactly **how likely** each outcome is to happen.

That is exactly what a **Probability Distribution** is: a mathematical "menu" of probabilities.

The one golden rule for _every_ probability distribution is that if you add up the probabilities of every possible outcome, **they must always equal exactly 1 (or 100%)**.

Probability distributions are split into two major families based on how you gather the data: **Counting** vs. **Measuring**.

---

### 1. Discrete Probability Distributions (Counting)

You use discrete distributions when your data is made up of distinct, separate values that you can count. There are no "in-between" values. You can't roll a 3.5 on a standard die, and you can't have 2.5 children.

- **Key Feature:** You can calculate the probability of an **exact, specific outcome** (e.g., "What is the probability of getting exactly 2 Heads?").
    
- **Famous Examples:** The Binomial Distribution, the Poisson Distribution.
    

**Example Scenario: Flipping Two Coins**

Let's say you flip two coins. We want to map out the probability distribution for the number of Heads you get. Let our variable $X$ represent the number of Heads.

The only possible outcomes for $X$ are 0, 1, or 2.

|**Number of Heads (X)**|**Ways it can happen**|**Probability P(X)**|
|---|---|---|
|**0**|Tails-Tails|$0.25$ (25%)|
|**1**|Heads-Tails, Tails-Heads|$0.50$ (50%)|
|**2**|Heads-Heads|$0.25$ (25%)|
|**Total**||**1.00 (100%)**|

Because we listed every possible outcome and their probabilities add up to 1, we have successfully created a discrete probability distribution!

---

### 2. Continuous Probability Distributions (Measuring)

You use continuous distributions when your data involves measuring things that can be broken down into infinite decimals, like time, weight, height, or distance.

- **Key Feature:** Because there are infinite possible decimals, the probability of getting one _exact, precise_ number is technically **zero** (e.g., the chance of a newborn weighing exactly 7.000000000... lbs is impossible to hit perfectly). Instead, you calculate the probability of a value falling within a **range** (e.g., "What is the probability a baby weighs between 7 and 8 lbs?").
    
- **Famous Examples:** The Normal Distribution (The Bell Curve), the Uniform Distribution.
    

**Example Scenario: Commute Times**

Imagine you track how long it takes you to drive to work every day. It is never exactly the same.

- Sometimes it takes 20.5 minutes.
    
- Sometimes it takes 20.532 minutes.
    
- Sometimes there is traffic, and it takes 35 minutes.
    

If you graphed all these times, you wouldn't get a neat table like the coin flips. You would get a smooth curve. The area under that entire curve equals 1 (or 100%), and you would use it to answer questions like: _"What is the probability my commute takes less than 25 minutes?"_

---

Would you like to start by looking at the most famous discrete distribution (the **Binomial Distribution**) or the most famous continuous distribution (the **Normal Distribution / Bell Curve**)?

---

This is a fantastic place to start. The world of discrete probability distributions is essentially built by stacking these simple concepts on top of each other.

Let's break down how we go from a single event to full-blown probability distributions, using some examples from software and game logic.

---

### 1. The Single Bernoulli Trial

A **Bernoulli Trial** is the absolute simplest experiment in statistics. It is an event that has exactly two possible outcomes: **Success** or **Failure**.

- **Success (1):** Has a probability of $p$.
    
- **Failure (0):** Has a probability of $1 - p$ (often called $q$).
    

**Example Scenario:**

Imagine you are designing a simple HTML5 platformer game. A player presses a button to jump a gap. They either make the jump (Success) or fall in (Failure). Let's say the gap is fairly easy, so there is a **70%** chance of success ($p = 0.7$) and a **30%** chance of failure ($1 - p = 0.3$).

That single jump is one Bernoulli trial.

---

### 2. Repeated Bernoulli Trials

Things get interesting when we do that same experiment multiple times. To qualify as "Repeated Bernoulli Trials," the situation must follow two strict rules:

1. **Independence:** One trial cannot affect the next.
    
2. **Constant Probability:** The probability of success ($p$) must stay exactly the same every single time.
    

**Example Scenario:**

The player faces a level with **5 identical gaps** in a row. Making the first jump doesn't magically make the second jump easier, and the 70% success rate stays the same for each one.

---

### 3. The Binomial Distribution

The **Binomial Distribution** is what you use when you have a _fixed number_ of repeated Bernoulli trials, and you want to find the probability of getting a _specific number of successes_.

- **The Question it Answers:** "Out of $n$ total tries, what are the odds I succeed exactly $k$ times?"
    
- **The Formula:**
    
    $$P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}$$
    
    - $n$ = Total number of trials
        
    - $k$ = Number of successes you want
        
    - $p$ = Probability of success on a single trial
        
    - $\binom{n}{k}$ = The combinations formula we learned earlier (to account for the fact that the successes could happen in any order).
        

**Example Scenario:**

Out of those **5 jumps** ($n = 5$), what is the probability the player successfully clears exactly **3** of them ($k = 3$)?

$$P(X = 3) = \binom{5}{3} (0.7)^3 (0.3)^{5 - 3}$$

$$P(X = 3) = 10 \cdot (0.343) \cdot (0.09)$$

$$P(X = 3) = 0.3087$$

There is roughly a **30.87%** chance the player will make exactly 3 out of 5 jumps.

#### Visualization of the Binomial Distribution

If we calculated the probability for 0 jumps, 1 jump, 2 jumps, 3, 4, and 5 jumps, and put them on a bar chart, we would see a shape that often looks like a bell curve.

Because the success rate is 70% (which is high), the tallest bars will be clustered on the right side around 3 and 4 successes, showing that higher success counts are the most likely outcome.

---

### 4. The Geometric Distribution

While the Binomial distribution has a fixed number of trials, the **Geometric Distribution** has no set limit. Instead, you just keep trying over and over again until you get your **very first success**.

- **The Question it Answers:** "How many failures will I get before I finally succeed?" (Or, "What is the probability my first success happens exactly on try number $k$?")
    
- **The Formula:**
    
    $$P(X = k) = (1 - p)^{k - 1} p$$
    
    - $k$ = The specific attempt number where you want the first success to happen.
        
    - $(1 - p)^{k - 1}$ = The string of failures leading up to it.
        
    - $p$ = The final successful try.
        

**Example Scenario:**

You are working on rendering a highly complex video animation file. Because of experimental settings, every time you hit "Render," there is only a **20%** chance it completes without a crash ($p = 0.2$, so failure is $0.8$).

What is the probability that it finally renders successfully on exactly your **4th attempt**? (Meaning you fail 3 times, then succeed 1 time).

$$P(X = 4) = (0.8)^{4 - 1} \cdot 0.2$$

$$P(X = 4) = (0.8)^3 \cdot 0.2$$

$$P(X = 4) = 0.512 \cdot 0.2$$

$$P(X = 4) = 0.1024$$

There is a **10.24%** chance that your very first successful render happens exactly on try number 4.

#### Visualization of the Geometric Distribution

A Geometric distribution chart always looks like a staircase going down to the right.

The highest bar is _always_ on the 1st try, because mathematically, the single most likely outcome is that you get it right away. As you move further right to the 10th, 20th, or 50th try, the bars get exponentially smaller, representing how increasingly rare it is to fail _that_ many times in a row before finally succeeding.

---

Would you like to explore the **Poisson Distribution** next, which swaps out "number of trials" entirely and instead counts how many times an event happens within a specific window of time?

---

To understand probability distributions, we first have to understand the language mathematicians use to describe them. It all starts with the concept of a "Random Variable."

Here is a beginner-friendly breakdown of these core concepts.

### 2.8.1 Random Variable and Events

A **Random Variable** (usually written as a capital letter like $X$ or $Y$) is basically a translator. It translates real-world events into clean, easy-to-use numbers.

- **Explanation:** When you do an experiment (like tossing coins), the actual outcomes are physical things (like getting a "Head" or a "Tail"). Math formulas can't easily calculate the word "Head." So, we create a Random Variable to assign a number to that outcome.
    
- **Example:** You toss two coins. The physical outcomes are **HH, HT, TH, TT**.
    
    - Let's define our Random Variable **$X$ = The number of Heads**.
        
    - Now, $X$ translates those physical outcomes into numbers:
        
        - HH translates to $X = 2$
            
        - HT and TH translate to $X = 1$
            
        - TT translates to $X = 0$
            

An **Event** is just asking a specific question about that random variable. For example, the event "$X = 1$" is the same as asking, "In what scenarios do we get exactly 1 Head?" (Answer: HT and TH).

---

### Discrete Random Variable

A random variable is **discrete** if you can clearly count its possible values on your fingers (like 0, 1, 2, 3...).

There are no continuous "in-between" values. In our coin example, $X$ can be 0, 1, or 2. It is physically impossible for $X$ to equal 1.5 because you cannot flip one-and-a-half heads.

---

### Distribution of a Discrete Random Variable & The PMF

Once you have your discrete random variable, you want to know how the probability is spread out across all of its possible numbers. This overall picture is the **Distribution**.

The **Probability Mass Function (PMF)** is the actual mathematical rule (usually shown as a formula or a simple table) that gives you the exact probability for each specific value of $X$.

- **Notation:** You will usually see the PMF written as **$P(X = x)$** or sometimes just **$p(x)$**.
    
    _(In plain English: "The probability that the big overall Random Variable $X$ lands on the specific little number $x$.")_
    

**Example PMF Table (Tossing 2 Coins):**

Let's build the PMF for our $X$ (Number of Heads) example. There are 4 total possible coin flips (HH, HT, TH, TT).

|**Specific Value (x)**|**Physical Outcomes**|**Probability P(X=x)**|
|---|---|---|
|**0**|TT|$1/4 = 0.25$|
|**1**|HT, TH|$2/4 = 0.50$|
|**2**|HH|$1/4 = 0.25$|

This table _is_ the Probability Mass Function. It maps every possible number to its "mass" (its probability).

---

### Properties of the PMF

For any table or formula to officially be considered a valid PMF, it must strictly obey two unbreakable laws of probability:

**1. Every individual probability must be between 0 and 1.**

- **The Math:**
    
    $$0 \le P(X = x) \le 1$$
    
- **Explanation:** You cannot have a negative chance of something happening (no -20% chance), and you cannot have more than a completely certain chance of something happening (no 150% chance). Looking at our table, 0.25 and 0.50 perfectly follow this rule.
    

**2. The sum of all probabilities must equal exactly 1.**

- **The Math:**
    
    $$\sum P(X = x) = 1$$
    
- **Explanation:** If you add up the chances of _every single possible thing_ that could happen, it must equal 1 (or 100%). You must account for the entire universe of possibilities.
    
- **Checking our table:** $0.25 + 0.50 + 0.25 = 1.00$. This perfectly follows the rule!
    

---

Now that you know what a PMF is, would you like to see how to calculate the **Expected Value** (the mean) of a discrete random variable using its PMF table?