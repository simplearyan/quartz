
![[Pasted image 20260225082453.png]]

![[Pasted image 20260225082753.png]]

![[Pasted image 20260225082847.png]]

![[Pasted image 20260225082950.png]]

![[Pasted image 20260225083034.png]]

![[Pasted image 20260225083124.png]]

![[Pasted image 20260225083156.png]]

Here are the extracted questions from the provided images along with their step-by-step solutions.

### **Question 1**

**Question:** In a particular year, the profit (in lakhs of ₹) of Star Fish company is given by the polynomial $P(x) = ax^2 + bx + c$ where $x$ denotes the number of months since the beginning of the year (i.e., $x = 1$ denotes January, $x = 2$ denotes February, and so on). In January and February the company made a loss of ₹45 (in lakhs), and ₹19 (in lakhs) respectively, and in March the company made a profit of ₹3 (in lakhs). Let the loss be represented by negative of profit. Choose the correct set of options based on the given information.

- The maximum profit will be in the month of May.
    
- The maximum profit will be in the month of August.
    
- The maximum monthly profit amount is ₹53 lakh.
    
- The maximum monthly profit amount is ₹35 lakh.
    

**Solution:**

We are given $P(1) = -45$, $P(2) = -19$, and $P(3) = 3$. This gives a system of three equations:

1. $a(1)^2 + b(1) + c = -45 \Rightarrow a + b + c = -45$
    
2. $a(2)^2 + b(2) + c = -19 \Rightarrow 4a + 2b + c = -19$
    
3. $a(3)^2 + b(3) + c = 3 \Rightarrow 9a + 3b + c = 3$
    

Subtracting (1) from (2) gives: $3a + b = 26$

Subtracting (2) from (3) gives: $5a + b = 22$

Subtracting these new equations gives: $2a = -4 \Rightarrow a = -2$.

Substitute $a = -2$ into $3a + b = 26$: $3(-2) + b = 26 \Rightarrow b = 32$.

Substitute $a$ and $b$ into (1): $-2 + 32 + c = -45 \Rightarrow 30 + c = -45 \Rightarrow c = -75$.

The profit polynomial is $P(x) = -2x^2 + 32x - 75$.

The maximum of this downward-opening parabola occurs at $x = -b / (2a)$:

$x = -32 / (2 \cdot -2) = -32 / -4 = 8$. Month 8 is **August**.

The maximum profit amount is $P(8) = -2(8)^2 + 32(8) - 75 = -128 + 256 - 75 = 53$. (₹**53 lakh**).

**Correct Options:**

- The maximum profit will be in the month of August.
    
- The maximum monthly profit amount is ₹53 lakh.
    

---

### **Question 2**

**Question:** If $A$ be a $3 \times 4$ matrix and $b$ be a $3 \times 1$ matrix, then choose the set of correct options.

- If $(A|b)$ be the augmented matrix and $(A'|b')$ be the matrix obtained from $(A|b)$ after a finite number of elementary row operations then the system $Ax = b$ and the system $A'x = b'$ have the same set of solutions.
    
- If $(A'|b')$ is the reduced row echelon form of $(A|b)$ then the system $A'x = b'$ has at least one solution.
    
- If $(A'|b')$ is the reduced row echelon form of $(A|b)$, then $A'$ is also in reduced row echelon form.
    
- If $(A'|b')$ is the reduced row echelon form of $(A|b)$ and there is no row such that the only non zero entry lies in the last column of $(A'|b')$ then the system $Ax = b$ has at least one solution.
    

**Solution:**

1. Elementary row operations do not change the solution space of a linear system. (True)
    
2. The RREF could reveal an inconsistent system (e.g., a row like $[0 \ 0 \ 0 \ 0 \ | \ 1]$), so it doesn't guarantee a solution. (False)
    
3. The definition of RREF applies to the submatrix $A'$ as well. The properties of leading 1s and zero rows carry over perfectly when ignoring the last column. (True)
    
4. The stated condition ("no row such that the only non zero entry lies in the last column") is the exact requirement for a system to be consistent. (True)
    

**Correct Options:**

- If $(A|b)$ be the augmented matrix... have the same set of solutions.
    
- If $(A'|b')$ is the reduced row echelon form of $(A|b)$, then $A'$ is also in reduced row echelon form.
    
- If $(A'|b')$ is the reduced row echelon form of $(A|b)$ and there is no row such that the only non zero entry lies in the last column... the system $Ax = b$ has at least one solution.
    

---

### **Question 3**

**Question:** Choose the set of correct options

- If the sum of all the elements of each row of a matrix $A$ is 0, then $A$ is not invertible.
    
- If $E$ is a matrix of order $3 \times 3$ obtained from the identity matrix by a finite number of elementary row operations then $E$ is invertible.
    
- Any system of linear equations has at least one solution.
    
- If $A$ is a matrix of order $3 \times 3$ and $det(A) = 3$ then $det(Adj(A)) = 3$.
    
- If $A$ is a matrix of order $3 \times 3$ and $det(A) = 3$ then $det(Adj(A)) = 9$.
    

**Solution:**

1. If row sums are 0, multiplying $A$ by a column vector of all 1s results in the zero vector. Since $Ax = 0$ has a non-trivial solution, $\det(A) = 0$, so it is not invertible. (True)
    
2. Elementary matrices are always invertible, and a product of elementary matrices is also invertible. (True)
    
3. Systems can be inconsistent (parallel lines, etc.) and have zero solutions. (False)
    
    4/5) The property relating determinants is $\det(Adj(A)) = (\det(A))^{n-1}$. For a $3 \times 3$ matrix with $\det(A) = 3$, $\det(Adj(A)) = 3^{3-1} = 3^2 = 9$. (Option 5 is True, Option 4 is False).
    

**Correct Options:**

- If the sum of all the elements of each row of a matrix $A$ is 0, then $A$ is not invertible.
    
- If $E$ is a matrix of order $3 \times 3$ obtained from the identity matrix by a finite number of elementary row operations then $E$ is invertible.
    
- If $A$ is a matrix of order $3 \times 3$ and $det(A) = 3$ then $det(Adj(A)) = 9$.
    

---

### **Question 4**

**Question:** Ramya bought 1 comic book, 2 horror books, and 1 novel from a bookshop which cost her ₹1000. Romy bought 2 comic books, 5 horror books, and 1 novel which cost him ₹2000. Farjana bought 4 comic books, 5 horror books, and $c$ novels from a shop which cost her ₹$d$. If $x_1, x_2$, and $x_3$ represent the price of each comic book, horror book, and novel, respectively, then choose the set of correct options.

_(Images of three matrix representations and four conditional statements provided in the prompt)._

**Solution:**

The system of equations is:

$1x_1 + 2x_2 + 1x_3 = 1000$

$2x_1 + 5x_2 + 1x_3 = 2000$

$4x_1 + 5x_2 + cx_3 = d$

Matrix representations:

The standard column representation (Option 1) is correct.

The row vector representation (Option 2) translates to $[x_1 \ x_2 \ x_3] A^T = B^T$, which gives the exact same equations when multiplied out. Option 3 is dimensionally invalid.

Let's find the determinant of the coefficient matrix:

$D = 1(5c - 5) - 2(2c - 4) + 1(10 - 20) = 5c - 5 - 4c + 8 - 10 = c - 7$.

- If $c = 2$, $D \neq 0$, so the system has a unique solution. (Option 4 says it will _not_ be unique, so it is False. Option 7 says it _can_ be determined, so it is True).
    
- If $c = 7$, $D = 0$. The system is either inconsistent or has infinitely many solutions depending on $d$.
    
    Applying row operations with $c=7$: $R_2 - 2R_1 \Rightarrow [0 \ 1 \ -1 \ | \ 0]$ and $R_3 - 4R_1 \Rightarrow [0 \ -3 \ 3 \ | \ d - 4000]$.
    
    Adding $3R_2$ to $R_3$ yields $[0 \ 0 \ 0 \ | \ d - 4000]$.
    
- If $d = 4000$, the last row is all zeros (consistent, infinitely many solutions). Because $x_1$ and $x_2$ will be dependent on the free variable $x_3$, the specific price cannot be determined. (Option 5 is True).
    
- If $d = 3000$, the last row implies $0 = -1000$ (inconsistent). The shopkeeper made a mistake. (Option 6 is True).
    

**Correct Options:**

- The matrix representation to find $x_1, x_2$ and $x_3$ is $\begin{bmatrix} 1 & 2 & 1 \\ 2 & 5 & 1 \\ 4 & 5 & c \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 1000 \\ 2000 \\ d \end{bmatrix}$
    
- The matrix representation to find $x_1, x_2$ and $x_3$ is $\begin{bmatrix} x_1 & x_2 & x_3 \end{bmatrix} \begin{bmatrix} 1 & 2 & 4 \\ 2 & 5 & 5 \\ 1 & 1 & c \end{bmatrix} = \begin{bmatrix} 1000 & 2000 & d \end{bmatrix}$
    
- If $c = 7$ and $d = 4000$, then the price of each comic book cannot be determined from this data.
    
- If $c = 7$ and $d = 3000$, then the shopkeeper has made a mistake.
    
- If $c = 2$ and $d = 3000$, then the price of each comic book can be determined from the data.
    

---

### **Question 5**

**Question:** Let $A$ be an $m \times n$ matrix such that $m < n$. How many solutions does $Ax = 0$ have?

**Solution:** A homogeneous system ($Ax = 0$) always has at least the trivial solution ($x = 0$), so it's never "No solution". Since there are fewer equations ($m$) than variables ($n$), there must be at least $n - m$ free variables. This implies infinitely many solutions.

**Correct Option:** Infinitely many solutions.

---

### **Question 6**

**Question:** Let $A$ be an $n \times n$ matrix such that $\sum_{j=1}^n a_{ij} = 0$ for all $i$. How many solutions does $Ax = 0$ have?

**Solution:** The condition means the sum of the elements in each row is 0. If we let $x$ be a column vector of all 1s ($x = [1, 1, ..., 1]^T$), the product $Ax$ calculates the row sums, resulting in a zero vector. Since there is a non-trivial solution $x \neq 0$ for a square matrix, the determinant is 0, and there are infinitely many solutions.

**Correct Option:** Infinitely many solutions.

---

### **Question 7**

**Question:** How many solutions does the following system have? Enter 1 if there is only one solution, 0 if there are no solutions and -1 if there are infinitely many solutions.

$$A = \begin{bmatrix} 1 & 0 & -1 \\ 1 & 1 & -1 \\ 2 & 1 & -2 \end{bmatrix}, b = \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}$$

**Solution:** Form the augmented matrix and reduce:

$\begin{bmatrix} 1 & 0 & -1 & | & 1 \\ 1 & 1 & -1 & | & 3 \\ 2 & 1 & -2 & | & 4 \end{bmatrix} \xrightarrow{R_2-R_1, R_3-2R_1} \begin{bmatrix} 1 & 0 & -1 & | & 1 \\ 0 & 1 & 0 & | & 2 \\ 0 & 1 & 0 & | & 2 \end{bmatrix} \xrightarrow{R_3-R_2} \begin{bmatrix} 1 & 0 & -1 & | & 1 \\ 0 & 1 & 0 & | & 2 \\ 0 & 0 & 0 & | & 0 \end{bmatrix}$

The system is consistent and has a free variable (column 3), meaning it has infinitely many solutions.

**Answer:** **-1**

---

### **Question 8**

**Question:** Let the reduced row echelon form of a matrix $A$ be $\begin{bmatrix} 1 & 0 & 0 & -1/2 \\ 0 & 1 & 0 & 1/6 \\ 0 & 0 & 1 & 1/6 \end{bmatrix}$. The first, second, third and fourth columns of $A$ are $\begin{bmatrix} 1 \\ 0 \\ -1 \end{bmatrix}$, $\begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix}$, $\begin{bmatrix} a \\ b \\ c \end{bmatrix}$ and $\begin{bmatrix} -1 \\ 0 \\ 0 \end{bmatrix}$, respectively. The value of $a+b+c$ is...

**Solution:** The RREF shows the linear dependencies between columns. Let the columns be $C_1, C_2, C_3, C_4$. The 4th column of the RREF dictates:

$C_4 = -\frac{1}{2}C_1 + \frac{1}{6}C_2 + \frac{1}{6}C_3$

Multiply by 6: $6C_4 = -3C_1 + C_2 + C_3$

Rearrange for $C_3$: $C_3 = 6C_4 + 3C_1 - C_2$

Substitute the known columns:

$C_3 = 6\begin{bmatrix} -1 \\ 0 \\ 0 \end{bmatrix} + 3\begin{bmatrix} 1 \\ 0 \\ -1 \end{bmatrix} - \begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix} = \begin{bmatrix} -6 \\ 0 \\ 0 \end{bmatrix} + \begin{bmatrix} 3 \\ 0 \\ -3 \end{bmatrix} - \begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix} = \begin{bmatrix} -6 + 3 - 3 \\ 0 + 0 - 2 \\ 0 - 3 - 1 \end{bmatrix} = \begin{bmatrix} -6 \\ -2 \\ -4 \end{bmatrix}$

Thus, $a = -6, b = -2, c = -4$.

$a + b + c = -6 - 2 - 4 = -12$.

**Answer:** **-12**

---

### **Question 9**

**Question:** $A$ is the reduced row echelon form of the matrix $\begin{bmatrix} 1 & 3 & 0 & 0 \\ 4 & 1 & 5 & 5 \\ 2 & 2 & 7 & 91 \\ 3 & 9 & 0 & 0 \end{bmatrix}$. Then determinant of $A$ is...

**Solution:** Notice that Row 4 is a direct scalar multiple of Row 1 ($3 \times [1, 3, 0, 0] = [3, 9, 0, 0]$). This means the original matrix is linearly dependent and its determinant is 0. Its Reduced Row Echelon Form ($A$) will therefore contain at least one complete row of zeros. The determinant of any square matrix with a row of zeros is 0.

**Answer:** **0**

---

### **Question 10**

**Question:** If $\begin{bmatrix} x \\ y \\ z \end{bmatrix}$ is a solution of the system of equations

$7x + 2y + z = 8$

$3y - z = 2$, then the value of $x + y + z$ is

$-3x + 4y - 2z = 5$

**Solution:**

From equation 2: $z = 3y - 2$

Substitute $z$ into equations 1 and 3:

1. $7x + 2y + (3y - 2) = 8 \Rightarrow 7x + 5y = 10 \Rightarrow 7x = 10 - 5y$
    
2. $-3x + 4y - 2(3y - 2) = 5 \Rightarrow -3x - 2y + 4 = 5 \Rightarrow -3x - 2y = 1 \Rightarrow x = (-1 - 2y)/3$
    
    Set the expressions for $x$ equal:
    
    $\frac{10 - 5y}{7} = \frac{-1 - 2y}{3}$
    
    Cross-multiply: $30 - 15y = -7 - 14y$
    
    $y = 37$
    
    Find $x$: $x = (-1 - 2(37))/3 = -75 / 3 = -25$
    
    Find $z$: $z = 3(37) - 2 = 111 - 2 = 109$
    
    Sum: $x + y + z = -25 + 37 + 109 = 121$.
    
    **Answer:** **121**
    

---

### **Question 11**

**Question:** Let $A = [1 \ 7 \ 2 \ 9]$ and $M$ denote the reduced row echelon form of $A^T A$. The number of non-zero rows of $M$ is...

**Solution:** $A$ is a $1 \times 4$ matrix, so its rank is 1. The product $A^TA$ yields a $4 \times 4$ matrix. An important property in linear algebra states that $rank(A^TA) = rank(A)$. Therefore, the rank of $A^TA$ is 1. The number of non-zero rows in the reduced row echelon form ($M$) of a matrix equals its rank.

**Answer:** **1**

---

### **Question 12**

**Question:** Consider the curve corresponding to the function $f(x) = ax^3 + bx^2 + cx + d$. The following points lie on the curve: $(1, 1), (2, 7), (-1, -5), (3, 23)$. Find the value of $a - b + c - d$.

**Solution:** The question asks for the value of $a - b + c - d$.

Notice the expression for $f(-1)$:

$f(-1) = a(-1)^3 + b(-1)^2 + c(-1) + d = -a + b - c + d$

The requested value is exactly the negative of this:

$a - b + c - d = -(-a + b - c + d) = -f(-1)$

We are given the point $(-1, -5)$, which means $f(-1) = -5$.

Therefore, $a - b + c - d = -(-5) = 5$.

**Answer:** **5**

![[Pasted image 20260225084126.png]]

![[Pasted image 20260225084235.png]]

![[Pasted image 20260225084312.png]]

![[Pasted image 20260225084545.png]]

Here are the extracted questions from the provided images along with their step-by-step solutions based on the "Comprehension Type Question" context.

### **Context Analysis: Traffic Flow Network**

Based on the principle of conservation of flow, the total number of vehicles entering a junction must equal the total number of vehicles leaving it. Let's analyze each junction:

- **West Street Junction**: Inflow = 400. Outflows are towards North ($2x_1$) and South ($x_4$).
    
    Equation: $2x_1 + x_4 = 400$
    
- **North Street Junction**: Inflows are from West ($2x_1$) and East ($3x_2$). Outflow = 1000.
    
    Equation: $2x_1 + 3x_2 = 1000$
    
- **East Street Junction**: Inflow = 900. Outflows are towards North ($3x_2$) and South ($2x_3$).
    
    Equation: $3x_2 + 2x_3 = 900$
    
- **South Street Junction**: Inflows are from West ($x_4$) and East ($2x_3$). Outflow = $c$.
    
    Equation: $2x_3 + x_4 = c$
    

---

### **Question 13**

**Question:** Which of the following options are correct?

_(Four options are given: two sets of linear equations and two matrix representations)_

**Solution:**

From our context analysis, the correct system of equations is:

1. $2x_1 + 3x_2 = 1000$
    
2. $3x_2 + 2x_3 = 900$
    
3. $2x_3 + x_4 = c$
    
4. $2x_1 + x_4 = 400$
    

Looking at the given options:

- **Option 1** exactly matches this system of equations.
    
- **Option 2** has incorrect right-hand side values ($2x_1 + 3x_2 = 900$, etc.).
    
- To find the correct matrix representation, we can write the system as $Ax = b$:
    
    $\begin{bmatrix} 2 & 3 & 0 & 0 \\ 0 & 3 & 2 & 0 \\ 0 & 0 & 2 & 1 \\ 2 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} 1000 \\ 900 \\ c \\ 400 \end{bmatrix}$
    
- **Option 3** has the RHS vector as $[900, 1000, 400, c]^T$, which is incorrect.
    
- **Option 4** perfectly matches our derived matrix representation.
    

**Correct Options:**

- The system of equations corresponding to the flow of expected traffic according to the given data above, will be
    
    $2x_1 + 3x_2 = 1000$
    
    $3x_2 + 2x_3 = 900$
    
    $2x_3 + x_4 = c$
    
    $2x_1 + x_4 = 400$
    
- The matrix representation of the system of equations corresponding to the flow of expected traffic according to the given data above is
    
    $\begin{bmatrix} 2 & 3 & 0 & 0 \\ 0 & 3 & 2 & 0 \\ 0 & 0 & 2 & 1 \\ 2 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} 1000 \\ 900 \\ c \\ 400 \end{bmatrix}$
    

---

### **Question 14**

**Question:** How many vehicles are expected to pass through the South Street per hour on an average?

**Solution:**

To find the overall traffic passing through the South street ($c$), we apply the conservation of flow to the entire network as a whole.

Total vehicles entering the network = Total vehicles leaving the network

- **Total Inflow**: West Street (400) + East Street (900) = 1300
    
- **Total Outflow**: North Street (1000) + South Street ($c$) = $1000 + c$
    

Equating them:

$1300 = 1000 + c$

$c = 300$

**Answer:** **300**

---

### **Question 15**

**Question:** Match the names of the street in Column A with the maximum and minimum number of vehicles expected to pass through the street on an average (per hour) in Column B and Column C, respectively; in Table M2W2GA1.

_(Checkboxes with various matching combinations are provided)_

**Solution:**

Let the flow on the four internal streets be $f_1 = 2x_1, f_2 = 3x_2, f_3 = 2x_3, f_4 = x_4$. Since traffic cannot flow backwards on one-way streets, $f_1, f_2, f_3, f_4 \ge 0$.

Our equations are:

1. $f_1 + f_2 = 1000$
    
2. $f_2 + f_3 = 900$
    
3. $f_3 + f_4 = 300$ (since $c = 300$)
    
4. $f_1 + f_4 = 400$
    

We can express all flows in terms of one variable, let's use $f_4$ (West to South):

- $f_4$ must be $\ge 0$.
    
- From (3): $f_3 = 300 - f_4$. Since $f_3 \ge 0$, $300 - f_4 \ge 0 \Rightarrow f_4 \le 300$. Therefore, **$0 \le f_4 \le 300$**.
    
- From (2): $f_2 = 900 - f_3 = 900 - (300 - f_4) = 600 + f_4$. As $f_4$ ranges from $0$ to $300$, **$600 \le f_2 \le 900$**.
    
- From (4): $f_1 = 400 - f_4$. As $f_4$ ranges from $0$ to $300$, $f_1$ ranges from $400 - 300 = 100$ to $400 - 0 = 400$. Therefore, **$100 \le f_1 \le 400$**.
    

Now, let's match the columns for each street:

- **a) West to North ($f_1$):** Min = 100 (2), Max = 400 (iii). Combination: **a $\rightarrow$ iii $\rightarrow$ 2**
    
- **b) East to North ($f_2$):** Min = 600 (3), Max = 900 (iv). Combination: **b $\rightarrow$ iv $\rightarrow$ 3**
    
- **c) East to South ($f_3$):** Min = 0 (1 or 4), Max = 300 (i or ii). Valid combinations: **c $\rightarrow$ i/ii $\rightarrow$ 1/4**
    
- **d) West to South ($f_4$):** Min = 0 (1 or 4), Max = 300 (i or ii). Valid combinations: **d $\rightarrow$ i/ii $\rightarrow$ 1/4**
    

Evaluating the given checkbox options against our findings:

- `d -> i -> 2`: Incorrect (Min for d is 0, not 100).
    
- `b -> iii -> 3`: Incorrect (Max for b is 900, not 400).
    
- `b -> iv -> 3`: **Correct** (Max 900, Min 600).
    
- `d -> ii -> 1`: **Correct** (Max 300, Min 0).
    
- `a -> iii -> 2`: **Correct** (Max 400, Min 100).
    
- `a -> iii -> 4`: Incorrect (Min for a is 100, not 0).
    
- `c -> i -> 4`: **Correct** (Max 300, Min 0).
    

**Correct Options:**

- b $\rightarrow$ iv $\rightarrow$ 3
    
- d $\rightarrow$ ii $\rightarrow$ 1
    
- a $\rightarrow$ iii $\rightarrow$ 2
    
- c $\rightarrow$ i $\rightarrow$ 4