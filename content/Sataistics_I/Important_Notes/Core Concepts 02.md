
### **Addition rule of counting** 

The addition rule of counting states that if one action can occur in $n_1$ ways and a second action can occur in $n_2$ ways, the total number of ways to perform _either_ action is **$n_1 + n_2$**.

**Example:** Suppose you have a gift card that allows you to buy exactly one item, and you are choosing between 4 different shirts and 3 different pants. Because you can only choose a shirt _or_ a pant, the total number of choices you have is $4 + 3 = 7$ ways.

Does that make sense? If you are ready, we can look at the **multiplication rule of counting** next, which applies when you want to perform _both_ actions together instead of just one.

### **Multiplication rule of counting**

The multiplication rule of counting applies when you want to perform multiple actions _together_. It states that if one action can happen in $n_1$ ways and a second action can happen in $n_2$ ways, the total number of ways both actions can occur together is **$n_1 \times n_2$**.

This rule can be extended to any number of actions in a sequence by simply multiplying all the possibilities together ($n_1 \times n_2 \times \dots \times n_r$).

**Example:** Following our previous gift card scenario, suppose the card now allows you to buy exactly _one shirt and one pant_. If there are 4 different shirts and 3 different pants to choose from, you have $4 \times 3 = 12$ possible outfit combinations.

Does this make sense? If you are comfortable with this basic rule, we can look at how it builds into **Factorials** and **Permutations** (calculating the number of ways to arrange items in a specific order) next!

### **Permutation**

In combinatorics, a **permutation** is a way to select and arrange objects from a group where the **order of the arrangement strictly matters**.

The golden rule to remember here is: **Position is everything.** If you change the order of the items, it counts as an entirely new permutation.

_(A helpful way to remember this is to think of a lock. Even though we call it a "combination lock," it should actually be called a "permutation lock" because the order of the numbers matters! If the code is 1-2-3, entering 3-2-1 will not open it.)_

Here is the breakdown of the formula and how to use it.

#### **The Formula**

To calculate permutations, we use **factorials** (represented by an exclamation point, $!$). A factorial just means multiplying a number by every whole number below it down to 1 (e.g., $4! = 4 \cdot 3 \cdot 2 \cdot 1 = 24$).

When you want to arrange $r$ items selected from a larger pool of $n$ total items, you use this formula:

$$P(n, r) = \frac{n!}{(n - r)!}$$

- **$P(n, r)$** = The number of permutations (sometimes written as $^nP_r$ or $_nP_r$).
    
- **$n$** = The total number of items available to choose from.
    
- **$r$** = The number of items you are actually choosing and arranging.
    

---

#### **Example Scenario**

Let's say a local club with **10 members** is holding an election. They need to elect **3 people** to fill specific roles: a President, a Vice President, and a Secretary.

Because being President is very different from being Secretary, the order in which we pick the people completely changes the outcome. Therefore, this is a permutation.

**Step 1: Identify your variables**

- $n = 10$ (There are 10 total members to choose from).
    
- $r = 3$ (We are selecting and arranging 3 members for the roles).
    

**Step 2: Plug the numbers into the formula**

$$P(10, 3) = \frac{10!}{(10 - 3)!}$$

$$P(10, 3) = \frac{10!}{7!}$$

**Step 3: Expand the factorials and solve**

Writing out the full factorials makes the math much easier, because the top and bottom will cancel each other out!

$$P(10, 3) = \frac{10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}{7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}$$

Notice how everything from 7 down to 1 is on both the top and the bottom? We can just cross all of those out.

$$P(10, 3) = 10 \cdot 9 \cdot 8$$

$$P(10, 3) = 720$$

There are exactly **720 different ways** the club can elect a President, Vice President, and Secretary from their 10 members.

---

Would you like to look at the **Combination** formula next (which is what you use when the order does _not_ matter, like picking a team of 3 equals), or see how the permutation formula changes if you are allowed to repeat items (like making a 4-digit PIN code)?

### **Circular Permutation**

In standard (linear) permutations, you are arranging items in a straight line, meaning there is a clear "first" spot and "last" spot. But what happens when you arrange items in a circle, like people sitting around a round table?

This is called a **circular permutation**.

The trick with a circle is that there is no fixed starting or ending point. If everyone at a round table simply scoots one seat to the left, their relative positions to each other haven't changed. In circular permutations, **rotations do not count as new arrangements**.

Because of this, there are two different formulas depending on whether you can "flip" the circle over.

---

### 1. Standard Circular Permutation (Direction Matters)

Use this formula when the clockwise and counter-clockwise orders are considered different. The most common example is seating people at a table. You cannot physically flip a table upside down, so sitting on someone's left is strictly different than sitting on their right.

- **The Rule:** To prevent counting the identical rotated arrangements, we permanently "lock" one person into a seat to act as an anchor. Then, we just arrange the remaining items around them.
    
- **The Formula:**
    
    $$P_c = (n - 1)!$$
    
    - $n$ = The total number of items to arrange.
        

**Example Scenario:**

You are hosting a dinner party and want to see how many ways you can seat **5 friends** around a circular dining table.

**Step A: Identify your variable**

- $n = 5$
    

**Step B: Plug into the formula**

$$P_c = (5 - 1)!$$

$$P_c = 4!$$

**Step C: Expand and solve**

$$P_c = 4 \cdot 3 \cdot 2 \cdot 1 = 24$$

There are exactly **24 different ways** to arrange the 5 friends around the table.

---

### 2. Reversible Circular Permutation (Direction Does NOT Matter)

Use this formula when the circle can be physically picked up and flipped over in 3D space. The classic examples are **beads on a necklace** or **keys on a keyring**.

When you arrange 5 beads on a necklace, reading the colors clockwise gives you one order. But if you flip the necklace over, that exact same arrangement is now reading counter-clockwise. Because flipping it doesn't change the actual physical object, the clockwise and counter-clockwise versions are considered the exact same permutation.

- **The Rule:** Because every arrangement has an identical "flipped" twin, we take the standard circular formula and divide it perfectly in half.
    
- **The Formula:**
    
    $$P_{flip} = \frac{(n - 1)!}{2}$$
    

**Example Scenario:**

You are making a bracelet and have **6 uniquely colored beads**. How many different bracelets can you make?

**Step A: Identify your variable**

- $n = 6$
    

**Step B: Plug into the formula**

$$P_{flip} = \frac{(6 - 1)!}{2}$$

$$P_{flip} = \frac{5!}{2}$$

**Step C: Expand and solve**

$$P_{flip} = \frac{5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}{2}$$

$$P_{flip} = \frac{120}{2} = 60$$

There are exactly **60 different bracelets** you can create.

---

Now that we have covered straight lines and circles where order _matters_, would you like to move on to **Combinations** (where order does _not_ matter at all)?

### **Combination**

While a permutation is all about the exact order of things, a **combination** is a way to select items from a larger group where the **order does not matter at all**.

If you are making a fruit salad, tossing in apples, bananas, and grapes gives you the exact same salad as tossing in grapes, apples, and bananas. Because the final result is the same regardless of the order you picked them, this is a combination.

The easiest way to think about the combination formula is that it calculates all the possible permutations, and then divides out the duplicate arrangements so you are only left with the unique groupings.

### The Formula

To find the number of combinations, you use a formula very similar to the permutation formula, but with one extra piece in the denominator to divide out those pesky duplicates (which is $r!$).

$$C(n, r) = \frac{n!}{r!(n - r)!}$$

- **$C(n, r)$** = The number of combinations (often written as $^nC_r$, $_nC_r$, or $\binom{n}{r}$, which is pronounced "$n$ choose $r$").
    
- **$n$** = The total number of items available to choose from.
    
- **$r$** = The number of items you are selecting.
    

---

### Example Scenario

Let's go back to our local club with **10 members**. This time, instead of electing a President, Vice President, and Secretary (where the roles/order mattered), they just want to send a generic **3-person committee** to a conference.

Because being picked first for the committee is the exact same as being picked third, the order does not matter. This is a combination.

**Step 1: Identify your variables**

- $n = 10$ (There are 10 total members to choose from).
    
- $r = 3$ (We are selecting a group of 3 members).
    

**Step 2: Plug the numbers into the formula**

$$C(10, 3) = \frac{10!}{3!(10 - 3)!}$$

$$C(10, 3) = \frac{10!}{3! \cdot 7!}$$

**Step 3: Expand the factorials and solve**

Just like with permutations, expanding the top and bottom lets us cancel out a huge chunk of the math. Everything from 7 down to 1 on the top will cancel out with the $7!$ on the bottom.

$$C(10, 3) = \frac{10 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1}$$

$$C(10, 3) = \frac{720}{6}$$

$$C(10, 3) = 120$$

There are exactly **120 different ways** to form a 3-person committee out of 10 people.

_(Notice how much smaller this number is compared to the 720 permutations we calculated earlier for the same group? That is because we eliminated 600 duplicate arrangements!)_

---

Now that you have the formulas for both permutations and combinations in your toolkit, would you like to see how to use them to calculate the **Probability** of an event happening?