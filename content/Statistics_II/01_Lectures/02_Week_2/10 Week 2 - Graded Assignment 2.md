
![[Pasted image 20260225085811.png]]

![[Pasted image 20260225085902.png]]

![[Pasted image 20260225090010.png]]

![[Pasted image 20260225090036.png]]

![[Pasted image 20260225090128.png]]

![[Pasted image 20260225090201.png]]

![[Pasted image 20260225090243.png]]

Here are the extracted questions along with their step-by-step solutions to help you with your statistics concepts.

### Question 1

**Question:** A software engineer is testing a program for bugs. Each run of the program has a 15% chance of encountering a bug. Let $X$ be a geometric random variable representing the number of runs until the first bug is found. Given that the program has already been run 3 times without finding any bugs, what is the probability that the first bug will be found after the 5th run? Enter the answer correct to two decimal places.

**Solution:**

This problem relies on the **memoryless property** of the geometric distribution. The memoryless property states that $P(X > s + t \mid X > s) = P(X > t)$.

- We want to find the probability that the first bug is found _after_ the 5th run, given it wasn't found in the first 3 runs: $P(X > 5 \mid X > 3)$.
    
- Using the memoryless property, we can rewrite this as $P(X > 3 + 2 \mid X > 3) = P(X > 2)$.
    
- The probability of finding a bug is $p = 0.15$. Thus, the probability of _not_ finding a bug in a single run is $1 - p = 0.85$.
    
- $P(X > 2)$ means the first 2 runs are bug-free:
    
    $$P(X > 2) = (0.85)^2 = 0.7225$$
    

**Answer:** **0.72**

---

### Question 2

**Question:** The joint PMF table of two discrete random variables $X$ and $Y$ is given as:

_(Table provided in image)_

If $a = b/2$, then which of the following options is/are true?

- $f_X(2) = f_Y(2)$
    
- $f_X(1) \neq f_Y(1)$
    
- $X$ and $Y$ are independent.
    
- $X$ and $Y$ are not independent.
    

**Solution:**

First, let's find the missing variables $a$, $b$, and $k$ by using the property that marginal probabilities must sum up correctly, and the total probability must equal 1.

1. **Find $a$**: Look at the $Y=1$ row. The sum is $a + 1/8 = 3/8$. So, $a = 2/8 = 1/4$.
    
2. **Find $b$**: We are given $a = b/2$. Since $a = 1/4$, $b = 2(1/4) = 1/2 = 4/8$.
    
3. **Find $k$**: The total sum of the $f_Y(y)$ column must be 1. The $Y=1$ row sums to $3/8$. The $Y=2$ row sums to $k + b = k + 4/8$.
    
    $$3/8 + (k + 4/8) = 1 \implies k + 7/8 = 1 \implies k = 1/8$$
    

Now, let's complete the marginal distributions:

- $f_X(1) = a + k = 1/4 + 1/8 = 3/8$
    
- $f_X(2) = 1/8 + b = 1/8 + 4/8 = 5/8$
    
- $f_Y(1) = 3/8$ (given)
    
- $f_Y(2) = k + b = 1/8 + 4/8 = 5/8$
    

Let's evaluate the options:

- $f_X(2) = 5/8$ and $f_Y(2) = 5/8$. Therefore, $f_X(2) = f_Y(2)$ is **True**.
    
- $f_X(1) = 3/8$ and $f_Y(1) = 3/8$. Therefore, $f_X(1) \neq f_Y(1)$ is False.
    
- **Independence test**: If $X$ and $Y$ are independent, $P(X=x, Y=y) = f_X(x) \cdot f_Y(y)$ for all cells. Let's test cell $(1,1)$:
    
    $P(X=1, Y=1) = a = 1/4$.
    
    $f_X(1) \cdot f_Y(1) = (3/8) \cdot (3/8) = 9/64$.
    
    Since $1/4 \neq 9/64$, $X$ and $Y$ are **not independent**.
    

**Answer:** * **$f_X(2) = f_Y(2)$**

- **$X$ and $Y$ are not independent.**
    

---

### Question 3

**Question:** Let $X$ and $Y$ be two independent discrete random variables with CDFs $F_X$ and $F_Y$, respectively. Define another random variable $Z = \min(X, Y)$, then the CDF of $Z$ is

**Solution:**

The CDF of $Z$ is $F_Z(z) = P(Z \le z)$.

Using the complement rule, this is easier to solve:

$$P(Z \le z) = 1 - P(Z > z)$$

$$1 - P(\min(X,Y) > z)$$

For the minimum of $X$ and $Y$ to be strictly greater than $z$, _both_ $X$ and $Y$ must be strictly greater than $z$.

$$1 - P(X > z \text{ and } Y > z)$$

Because $X$ and $Y$ are independent, we can multiply their probabilities:

$$1 - [P(X > z) \cdot P(Y > z)]$$

Translate back to CDFs:

$$1 - [(1 - F_X(z)) \cdot (1 - F_Y(z))]$$

$$1 - [1 - F_X(z) - F_Y(z) + F_X(z)F_Y(z)]$$

$$F_X(z) + F_Y(z) - F_X(z)F_Y(z)$$

**Answer:** **$F_X + F_Y - F_X F_Y$**

---

### Question 4

**Question:** The following options gives the joint PMF of the random variables $X$ and $Y$. If the random variables $X$ and $Y$ are independent, then which of the following option(s) can be the joint PMF of $X$ and $Y$?

**Solution:**

For two discrete random variables to be independent, their joint PMF matrix must have a rank of 1. In simpler terms, all the rows must be perfect multiples (proportional) of each other, and the same goes for the columns.

Looking at the third option:

Row 0: `[1/12, 1/24, 1/24]`

Row 1: `[1/6, 1/12, 1/12]`

Row 2: `[1/4, 1/8, 1/8]`

Notice the relationships between the rows:

- Row 1 is exactly $2 \times$ Row 0.
    
- Row 2 is exactly $3 \times$ Row 0.
    

Because the rows are strictly proportional, the variables are independent. None of the other matrices share this proportional property across all rows and columns.

**Answer:** **The 3rd table option** (starts with 1/12, 1/24, 1/24)

---

### Question 5

**Question:** Let $X$ and $Y$ be two independent random variables such that $X \sim \text{Bernoulli}(0.2)$ and $Y \sim \text{Bernoulli}(0.4)$. Let another random variable $Z$ be defined as $Z = X + Y$. Find the value of $f_{X|Z=1}(1)$. Enter the answer correct to two decimal places.

**Solution:**

We need to find the conditional probability $P(X=1 \mid Z=1)$.

Using Bayes' theorem / conditional probability formula:

$$P(X=1 \mid Z=1) = \frac{P(X=1 \text{ and } Z=1)}{P(Z=1)}$$

1. **Numerator**: Since $Z = X + Y$, the event $(X=1 \text{ and } Z=1)$ means $Y$ must be $0$.
    
    Because $X$ and $Y$ are independent:
    
    $$P(X=1, Y=0) = P(X=1) \cdot P(Y=0) = (0.2) \cdot (1 - 0.4) = 0.2 \cdot 0.6 = 0.12$$
    
2. **Denominator**: The event $Z=1$ can happen in two mutually exclusive ways: $(X=1, Y=0)$ OR $(X=0, Y=1)$.
    
    $$P(Z=1) = P(X=1, Y=0) + P(X=0, Y=1)$$
    
    $$P(Z=1) = (0.2 \cdot 0.6) + (0.8 \cdot 0.4) = 0.12 + 0.32 = 0.44$$
    
3. **Final Calculation**:
    
    $$P(X=1 \mid Z=1) = \frac{0.12}{0.44} = \frac{12}{44} \approx 0.2727...$$
    

**Answer:** **0.27**

---

### Question 6

**Question:** Use the following information to answer the below two questions: The joint distribution of $X$ and $Y$ is given by $f_{XY}(x,y) = \frac{9}{16 \times 4^{x+y}}$, where $x, y \in \{0, 1, 2, \dots\}$. Find the probability mass function of $X + Y$.

**Solution:**

First, rewrite the joint distribution to see if $X$ and $Y$ are independent:

$$f_{XY}(x,y) = \frac{9}{16} \left(\frac{1}{4}\right)^x \left(\frac{1}{4}\right)^y = \left( \frac{3}{4} \left(\frac{1}{4}\right)^x \right) \left( \frac{3}{4} \left(\frac{1}{4}\right)^y \right)$$

This shows that $X$ and $Y$ are independent, and both follow a Geometric distribution with $p = 3/4$ (where $k$ starts at $0$).

Let $Z = X + Y$. We need $P(Z = k)$. We use convolution:

$$P(Z = k) = \sum_{x=0}^{k} P(X=x)P(Y=k-x)$$

$$P(Z = k) = \sum_{x=0}^{k} \left( \frac{3}{4} \left(\frac{1}{4}\right)^x \right) \left( \frac{3}{4} \left(\frac{1}{4}\right)^{k-x} \right)$$

$$P(Z = k) = \sum_{x=0}^{k} \frac{9}{16} \left(\frac{1}{4}\right)^k$$

Because the term inside the sum doesn't depend on $x$, and there are $k+1$ terms (from $0$ to $k$):

$$P(Z = k) = (k + 1) \frac{9}{16 \cdot 4^k}$$

**Answer:** **Option 2: $(k + 1)\frac{9}{16 \cdot 4^k}$**

---

### Question 7

**Question:** Find the probability mass function of $Z = \max\{X, Y\}$.

**Solution:**

For $Z = \max(X, Y)$, we first find the CDF of $Z$.

$$F_Z(k) = P(Z \le k) = P(\max(X,Y) \le k) = P(X \le k) \cdot P(Y \le k)$$

Since $X$ and $Y$ are identically distributed, $F_Z(k) = (F_X(k))^2$.

The CDF of $X$ is $F_X(k) = 1 - (1/4)^{k+1}$.

Therefore, $F_Z(k) = (1 - (1/4)^{k+1})^2$.

To find the PMF, we can use the identity for discrete discrete random variables: $P(\max=k) = P(X=k)^2 + 2P(X=k)P(Y<k)$.

Substituting the known values ($P(X=k) = \frac{3}{4}(1/4)^k$ and $P(Y<k) = 1 - (1/4)^k$):

$$f_Z(k) = \left( \frac{3}{4 \cdot 4^k} \right)^2 + 2 \left( \frac{3}{4 \cdot 4^k} \right) \left( 1 - \frac{1}{4^k} \right)$$

$$f_Z(k) = \frac{9}{16 \cdot 4^{2k}} + \frac{6}{4 \cdot 4^k} - \frac{6}{4 \cdot 4^{2k}}$$

Find a common denominator to match the options:

$$f_Z(k) = \frac{9}{16 \cdot 4^{2k}} + \frac{24 \cdot 4^k}{16 \cdot 4^{2k}} - \frac{24}{16 \cdot 4^{2k}}$$

$$f_Z(k) = \frac{9}{16 \cdot 4^{2k}} + \frac{24(4^k - 1)}{16 \cdot 4^{2k}}$$

Simplify the second fraction by dividing the numerator and denominator by 8:

$$f_Z(k) = \frac{9}{16 \cdot 4^{2k}} + \frac{3(4^k - 1)}{2 \cdot 4^{2k}}$$

This formula naturally holds true for $k=0$ as well.

**Answer:** **Option 3: $f_Z(k) = \frac{9}{16 \cdot 4^{2k}} + \frac{3(4^k - 1)}{2 \cdot 4^{2k}} \text{ for } k = 0, 1, \dots$**

---

### Question 8

**Question:** Let $X$ and $Y$ be two independent random variables with PMFs $f_X(k) = f_Y(k) = 1/6$ for $k = 1, 2, 3, 4, 5, 6$, and $0$ otherwise. Define $Z = X - Y$. Find the value of $f_Z(4)$. Enter the answer correct to two decimal places.

**Solution:**

We need to find the probability that $X - Y = 4$.

List all possible $(X, Y)$ pairs from the set $\{1, 2, 3, 4, 5, 6\}$ that satisfy this equation:

1. If $X = 6$, $Y$ must be $2$.
    
2. If $X = 5$, $Y$ must be $1$.
    
    No other combinations will result in $4$.
    

Since $X$ and $Y$ are independent and uniformly distributed, the probability of any specific pair is $(1/6) \times (1/6) = 1/36$.

$$P(Z = 4) = P(X=6, Y=2) + P(X=5, Y=1)$$

$$P(Z = 4) = \frac{1}{36} + \frac{1}{36} = \frac{2}{36} = \frac{1}{18}$$

$$1/18 \approx 0.0555...$$

**Answer:** **0.06**

---

Would you like me to walk through the convolution steps in Question 6 or the joint distributions logic in Question 4 in more detail?

![[Pasted image 20260225091619.png]]

![[Pasted image 20260225091700.png]]

![[Pasted image 20260225091740.png]]

![[Pasted image 20260225091817.png]]

Here are the extracted questions from the new set along with their step-by-step solutions.

### Question 9

**Question:** Let $X \sim \text{Geometric}(p)$ and $Y \sim \text{Geometric}(p)$ be independent and let $Z = X + Y$. Determine the values of $p$ for which $P(Z = 18) < P(Z = 19)$.

**Solution:**

Assuming the standard convention where the Geometric distribution represents the number of trials until the first success ($k \in \{1, 2, 3, \dots\}$), the sum of two independent Geometric random variables follows a Negative Binomial distribution: $Z \sim \text{NegativeBinomial}(2, p)$.

The PMF for $Z$ (the number of trials needed to get 2 successes) is:

$$P(Z = k) = \binom{k-1}{1} p^2 (1-p)^{k-2} = (k-1)p^2(1-p)^{k-2}$$

We are given $P(Z = 18) < P(Z = 19)$:

$$17p^2(1-p)^{16} < 18p^2(1-p)^{17}$$

Divide both sides by $p^2(1-p)^{16}$ (since $p \in (0,1)$, this is always positive):

$$17 < 18(1-p)$$

$$17 < 18 - 18p$$

$$18p < 1$$

$$p < \frac{1}{18}$$

Since $1/18 \approx 0.0555...$, this corresponds to $p < 0.056$.

**Answer:** **$p < 0.056$**

---

### Question 10

**Question:** Let $X_1, X_2$ and $X_3$ be three independent and identically distributed Poisson random variables with $\lambda_i = 2$ for all $i$. Find the probability that exactly one of the $X_i$ equals 1 and exactly one of the $X_i$ equals 2. Enter the answer correct to three decimal places.

**Solution:**

First, let's find the individual probabilities for a Poisson distribution with $\lambda = 2$:

- $P(X = 1) = \frac{e^{-2} \cdot 2^1}{1!} = 2e^{-2}$
    
- $P(X = 2) = \frac{e^{-2} \cdot 2^2}{2!} = 2e^{-2}$
    
- The probability that a variable is _neither_ 1 nor 2 is:
    
    $P(X \notin \{1, 2\}) = 1 - [P(X = 1) + P(X = 2)] = 1 - 4e^{-2}$
    

We need the event where one variable is 1, one is 2, and the third is neither. Because $X_1, X_2, X_3$ are independent, we multiply their individual probabilities. However, since the specific values (1, 2, neither) can be assigned to $X_1, X_2, X_3$ in any order, we must multiply by the number of permutations, which is $3! = 6$.

$$\text{Total Probability} = 6 \times P(X=1) \times P(X=2) \times P(X \notin \{1, 2\})$$

$$\text{Total Probability} = 6 \times (2e^{-2}) \times (2e^{-2}) \times (1 - 4e^{-2})$$

$$\text{Total Probability} = 24e^{-4} \times (1 - 4e^{-2})$$

Using $e \approx 2.71828$:

- $e^{-2} \approx 0.1353$
    
- $e^{-4} \approx 0.0183$
    
    $$\text{Total Probability} \approx 24(0.0183) \times (1 - 4(0.1353)) \approx 0.4392 \times (1 - 0.5412) \approx 0.4392 \times 0.4588 \approx 0.2015\dots$$
    

**Answer:** **0.202**

---

### Question 11

**Question:** Let $X \sim \text{Bernoulli}(0.4)$ and $Y \sim \text{Bernoulli}(0.3)$ be independent. Define $Z = X + Y - XY$, find the distribution of $Z$.

**Solution:**

Since $X$ and $Y$ are Bernoulli random variables, they only take values $0$ or $1$.

Let's analyze the expression $Z = X + Y - XY$. Notice this is the arithmetic equivalent of the logical "OR" operation ($X \cup Y$).

$Z$ will equal $0$ if and only if both $X = 0$ AND $Y = 0$. In all other cases (if either or both are 1), $Z = 1$.

Because $X$ and $Y$ are independent:

$$P(Z = 0) = P(X = 0 \text{ and } Y = 0) = P(X = 0) \cdot P(Y = 0)$$

$$P(Z = 0) = (1 - 0.4) \cdot (1 - 0.3) = 0.6 \cdot 0.7 = 0.42$$

Since $Z$ can only be $0$ or $1$, it is a Bernoulli random variable.

$$P(Z = 1) = 1 - P(Z = 0) = 1 - 0.42 = 0.58$$

**Answer:** **$\text{Bernoulli}(0.58)$**

---

### Question 12

**Question:** Let $X$ and $Y$ be independent and identically distributed Geometric random variables with parameter $0.8$. Find $P(X = 6 \mid X + Y = 7)$. Enter the answer correct to two decimal places.

**Solution:**

Assuming the convention that Geometric random variables represent the number of trials ($k \in \{1, 2, 3, \dots\}$), the sum $X + Y = 7$ implies there are exactly 6 possible pairs for $(X, Y)$:

$(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$.

For any specific pair $(x, y)$ that sums to $n$, the joint probability is:

$$P(X=x, Y=y) = [p(1-p)^{x-1}] \cdot [p(1-p)^{y-1}] = p^2(1-p)^{x+y-2}$$

Notice that this probability only depends on the sum $x+y$. Because the sum is fixed at $7$ for all our pairs, _every single pair is equally likely_.

Therefore, the conditional probability of any specific valid pair (like $X=6, Y=1$) given that $X+Y=7$ is simply $1$ divided by the total number of possible pairs.

$$P(X=6 \mid X+Y=7) = \frac{1}{6} \approx 0.1666\dots$$

**Answer:** **0.17**

---

### Question 13

**Question:** Let the random variables $X$ and $Y$, which represent the number of calls received by call centers $A$ and $B$, respectively, in a one-hour interval follow the Poisson distribution. The average number of calls received in call centers $A$ and $B$ is 5 per hour and 4 per hour, respectively. Assume that $X$ and $Y$ are independent. If $Z$ denotes the total number of calls received in call centers $A$ and $B$, find the conditional probability $f_{Y \mid Z=5}(4)$. Enter the answer correct to three decimal places.

**Solution:**

We know $X \sim \text{Poisson}(5)$ and $Y \sim \text{Poisson}(4)$. The sum of independent Poisson variables is also Poisson: $Z = X + Y \sim \text{Poisson}(5 + 4) \sim \text{Poisson}(9)$.

A standard property of Poisson distributions is that the conditional distribution of $Y$ given $X+Y=n$ is a Binomial distribution:

$$Y \mid (X+Y=n) \sim \text{Binomial}\left(n, p = \frac{\lambda_Y}{\lambda_X + \lambda_Y}\right)$$

Here, $n = 5$ and $p = \frac{4}{5 + 4} = \frac{4}{9}$. We want to find the probability that $Y = 4$ in this binomial distribution:

$$P(Y=4 \mid Z=5) = \binom{5}{4} \left(\frac{4}{9}\right)^4 \left(1 - \frac{4}{9}\right)^{5-4}$$

$$P(Y=4 \mid Z=5) = 5 \cdot \left(\frac{4}{9}\right)^4 \cdot \left(\frac{5}{9}\right)^1 = 5 \cdot \frac{256}{6561} \cdot \frac{5}{9} = \frac{6400}{59049} \approx 0.10838\dots$$

**Answer:** **0.108**

---

### Question 14

**Question:** A fair die is rolled two times independently. Let $X$ represent the number obtained in the 1st throw, and let $Y$ represent the number obtained in the 2nd throw. Define a new random variable $Z = \min(X, Y)$. Calculate $\text{Pr}(Z = 2)$. Enter the answer correct to two decimal places.

**Solution:**

The easiest way to find exactly $Z=2$ is to take the probability that the minimum is $\ge 2$ and subtract the probability that the minimum is $\ge 3$.

- For $\min(X, Y) \ge 2$, both $X \ge 2$ and $Y \ge 2$. There are 5 choices for each (2, 3, 4, 5, 6).
    
    $$P(Z \ge 2) = P(X \ge 2) \cdot P(Y \ge 2) = \left(\frac{5}{6}\right) \cdot \left(\frac{5}{6}\right) = \frac{25}{36}$$
    
- For $\min(X, Y) \ge 3$, both $X \ge 3$ and $Y \ge 3$. There are 4 choices for each (3, 4, 5, 6).
    
    $$P(Z \ge 3) = P(X \ge 3) \cdot P(Y \ge 3) = \left(\frac{4}{6}\right) \cdot \left(\frac{4}{6}\right) = \frac{16}{36}$$
    
    Now subtract them:
    
    $$P(Z = 2) = P(Z \ge 2) - P(Z \ge 3) = \frac{25}{36} - \frac{16}{36} = \frac{9}{36} = 0.25$$
    

**Answer:** **0.25**

---

### Question 15

**Question:** Let $X$ and $Y$ be two independent $\text{Bernoulli}(1/3)$ random variables. Define random variables $U$ and $V$ as $U = |Y - X|$ and $V = X + Y$. Are $U$ and $V$ independent?

**Solution:**

Let's find the joint distribution. The possible $(X, Y)$ pairs are $(0,0), (1,0), (0,1), (1,1)$.

- If $X=0, Y=0$: $U = |0-0| = 0$, $V = 0+0 = 0$. $P(X=0, Y=0) = (2/3)(2/3) = 4/9$.
    
- If $X=1, Y=0$: $U = |0-1| = 1$, $V = 1+0 = 1$. $P(X=1, Y=0) = (1/3)(2/3) = 2/9$.
    
- If $X=0, Y=1$: $U = |1-0| = 1$, $V = 0+1 = 1$. $P(X=0, Y=1) = (2/3)(1/3) = 2/9$.
    
- If $X=1, Y=1$: $U = |1-1| = 0$, $V = 1+1 = 2$. $P(X=1, Y=1) = (1/3)(1/3) = 1/9$.
    

Now, check for independence. If $U$ and $V$ are independent, $P(U=0, V=0)$ must equal $P(U=0) \cdot P(V=0)$.

- $P(U=0, V=0) = 4/9$ (from the first bullet point).
    
- $P(U=0) = P(0,0) + P(1,1) = 4/9 + 1/9 = 5/9$.
    
- $P(V=0) = P(0,0) = 4/9$.
    
- $P(U=0) \cdot P(V=0) = (5/9) \cdot (4/9) = 20/81$.
    
    Since $4/9 \neq 20/81$, the variables are dependent.
    

**Answer:** **No**

---

### Question 16

**Question:** A company is conducting a survey ... each employee is independently likely to pick these 5 options with probabilities of $1/2, 1/4, 1/8, 1/16$ and $1/16$. Responses are collected from $n$ employees. (i) What is the probability that exactly two out of the $n$ employees choose the "Not Applicable" response?

**Solution:**

This models a Binomial distribution where "success" is choosing "Not Applicable".

- Number of trials = $n$
    
- Probability of success $p = 1/16$
    
- Number of desired successes $k = 2$
    

Using the Binomial probability formula $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$:

$$P(\text{exactly 2}) = \binom{n}{2} \left(\frac{1}{16}\right)^2 \left(1 - \frac{1}{16}\right)^{n-2} = {}^nC_2 \left(\frac{1}{16}\right)^2 \left(\frac{15}{16}\right)^{n-2}$$

**Answer:** **Option c: ${}^nC_2 \left(\frac{1}{16}\right)^2 \left(\frac{15}{16}\right)^{n-2}$**

---

### Question 17

**Question:** (ii) What is the probability that both the "Flexible" and "Not Applicable" responses appear at least once in the survey results?

**Solution:**

We use the Inclusion-Exclusion Principle.

- Let $A$ be the event that "Flexible" appears at least once. $P(A) = 1 - P(\text{No Flexible}) = 1 - \left(\frac{15}{16}\right)^n$
    
- Let $B$ be the event that "Not Applicable" appears at least once. $P(B) = 1 - P(\text{No Not Applicable}) = 1 - \left(\frac{15}{16}\right)^n$
    
    We want the probability of $A \text{ and } B$. By De Morgan's Laws:
    
    $P(A \text{ and } B) = 1 - P(\text{not } A \text{ or not } B)$
    
    $P(A \text{ and } B) = 1 - [P(\text{not } A) + P(\text{not } B) - P(\text{not } A \text{ and not } B)]$
    
- $P(\text{not } A) = \left(\frac{15}{16}\right)^n$
    
- $P(\text{not } B) = \left(\frac{15}{16}\right)^n$
    
- $P(\text{not } A \text{ and not } B)$ means _neither_ option is picked. The probability a single person picks neither is $1 - (1/16 + 1/16) = 14/16$. Over $n$ trials, this is $(14/16)^n$.
    

Substitute these back in:

$$P(A \text{ and } B) = 1 - \left[\left(\frac{15}{16}\right)^n + \left(\frac{15}{16}\right)^n - \left(\frac{14}{16}\right)^n\right] = 1 - \left\{2\left(\frac{15}{16}\right)^n - \left(\frac{14}{16}\right)^n\right\}$$

**Answer:** **Option c: $1 - \left\{2\left(\frac{15}{16}\right)^n - \left(\frac{14}{16}\right)^n\right\}$**

---

### Question 18

**Question:** A technician is testing a new machine, which has a failure probability of 0.2 on any given trial. The number of trials until the first failure occurs is modeled using a geometric distribution. Which of the following statements is/are true?

**Solution:**

Let's evaluate the options against the properties of the Geometric distribution.

- a. Memoryless property states $P(X > n+k \mid X > k) = P(X > n)$. The statement gives a different formula, making it false.
    
- b. "The probability of the first failure occurring on a specific trial is independent..." This phrasing is tricky, but strictly speaking, the _first failure_ happening on trial $n$ depends on the previous $n-1$ trials _not_ failing. The individual trials are independent, but the geometric sequence is not.
    
- c. $P(X=3) = (1 - 0.2)^2(0.2) = 0.64 \times 0.2 = 0.128 \neq 0.16$.
    
- d. This is the definition of conditional probability in independent trials. If you are told the previous $n-1$ trials were successful, that history has no bearing on the next trial. The probability the machine fails on the very next attempt ($n^{th}$ trial) is simply its base probability of failing: $0.2$.
    

**Answer:** **Option d: The probability of the first failure occurring on the $n^{th}$ trial, given that the first $n-1$ trials were successful, is equal to the failure probability 0.2.**

---

Good luck with your stats prep! Let me know if you'd like to write a quick Python script to simulate any of these probability logic problems—it's a fantastic way to visually verify these discrete distributions.

![[Pasted image 20260225092424.png]]

![[Pasted image 20260225092458.png]]

Here are the extracted questions and step-by-step solutions for the new problem set regarding Aman and Deepak (Questions 19–24).

_(Note: Since we covered questions 9–18 in the previous turn, I have focused strictly on the newly added problem from the last two images. Let me know if you need any of the previous ones repeated!)_

### Problem Statement:

Two friends, Aman and Deepak, play a game in which each of them repeatedly and independently tosses a fair coin. The first to get a head wins outright. If both get heads together for the first time it is tie. Find the probability that Aman wins outright.

**Solution Template Provided:**

Let $X_1, X_2$ be the number of tosses Aman and Deepak need respectively to get heads.

Here $X_1, X_2$ are __**A**__ and follow a __**B**__ distribution.

$P(\text{Aman wins outright}) = P(\text{\_\_}\mathbf{C}\text{\_\_})$

$= \sum_{k=1}^{\infty} P(X_1 = k)P(\text{\_\_}\mathbf{D}\text{\_\_})$

$= \sum_{k=1}^{\infty} \left(\frac{1}{2}\right)^k \times \text{\_\_}\mathbf{E}\text{\_\_}$

$= \text{\_\_}\mathbf{F}\text{\_\_}$

**Options Provided:**

(1) Dependent

(2) Independent

(3) Geometric

(4) Negative Binomial

(5) Binomial

(6) $X_1 = X_2$

(7) $X_1 < X_2$

(8) $X_2 < X_1$

(9) $X_2 > k$

(10) $X_2 < k$

(11) $(1/2)^k$

(12) $1/2$

(13) $1/3$

(14) $1/4$

---

### Step-by-Step Solutions

**Question 19: Enter the correct option number for A.**

- **Explanation:** The problem explicitly states that Aman and Deepak "independently" toss a fair coin. Therefore, the random variables representing their tosses do not affect one another.
    
- **Answer:** **2** (Independent)
    

**Question 20: Enter the correct option number for B.**

- **Explanation:** The random variable representing the number of independent trials needed to get the _first_ success (in this case, getting a head) follows a Geometric distribution.
    
- **Answer:** **3** (Geometric)
    

**Question 21: Enter the correct option number for C.**

- **Explanation:** For Aman to win outright, he must get a head on an earlier toss than Deepak. This means the number of tosses Aman needs ($X_1$) must be strictly less than the number of tosses Deepak needs ($X_2$). Therefore, $P(\text{Aman wins outright}) = P(X_1 < X_2)$.
    
- **Answer:** **7** ($X_1 < X_2$)
    

**Question 22: Enter the correct option number for D.**

- **Explanation:** To calculate $P(X_1 < X_2)$, we sum over all possible values of $k$ where Aman gets his first head on toss $k$ ($X_1 = k$). For Aman to win in this scenario, Deepak must require _more_ than $k$ tosses. Because the events are independent, the joint probability is $P(X_1 = k) \cdot P(X_2 > k)$. Thus, the blank represents $X_2 > k$.
    
- **Answer:** **9** ($X_2 > k$)
    

**Question 23: Enter the correct option number for E.**

- **Explanation:** We need to find $P(X_2 > k)$. This is the probability that Deepak fails to get a head (i.e., rolls tails) on his first $k$ tosses. Since the coin is fair, the probability of getting tails on a single toss is $1/2$. The probability of getting tails $k$ times in a row is $(1/2)^k$.
    
- **Answer:** **11** ($(1/2)^k$)
    

**Question 24: Enter the correct option number for F.**

- **Explanation:** Now we solve the summation:
    
    $$\sum_{k=1}^{\infty} \left(\frac{1}{2}\right)^k \times \left(\frac{1}{2}\right)^k = \sum_{k=1}^{\infty} \left(\frac{1}{4}\right)^k$$
    
    This is an infinite geometric series with the first term $a = 1/4$ and common ratio $r = 1/4$.
    
    The formula for the sum of an infinite geometric series is $\frac{a}{1 - r}$:
    
    $$\text{Sum} = \frac{1/4}{1 - 1/4} = \frac{1/4}{3/4} = \frac{1}{3}$$
    
- **Answer:** **13** ($1/3$)
    

---

Would you like to review any of the statistical properties (like the infinite geometric series formula) used to solve this?