### Statistics

In simple terms, **Statistics** is the **art of learning from data**. It involves three basic steps: **collecting** information, **describing** it, and **analyzing** it, to make decisions or draw conclusions.

You can break it down into two main ideas:

- **Descriptive Statistics:** Just summarizing the data you already have, like calculating the average test score for a specific classroom.
- **Inferential Statistics:** Using a small sample of data to make a smart guess about a much larger group, like surveying 100 students to predict the average marks for an entire school.

### Population & Sample

In statistics, the difference between a population and a sample comes down to looking at the "whole" versus a "part."

Here is a breakdown of how they compare:

#### 1. The Population (The Whole)

The population is the **entire group** of people, items, or events that you want to study and draw conclusions about. It includes every single member that fits your specific criteria.

- **Keywords:** All, every, entire.
    
- **Measurements:** Numbers that describe a population are called **parameters** (like the population mean, $\mu$).
    
- **Example:** If you want to study the heights of adult men in India, your population would be _every single adult man currently living in India_.
    

#### 2. The Sample (The Part)

A sample is a **smaller, manageable subset** drawn from the population. Because it is usually impossible, too expensive, or too time-consuming to collect data from an entire population, researchers collect data from a sample instead.

- **Keywords:** Subset, selection, group, part.
    
- **Measurements:** Numbers that describe a sample are called **statistics** (like the sample mean, $\bar{x}$).
    
- **Example:** Instead of measuring every adult man in India, you might randomly select and measure _10,000 adult men across different states_. Those 10,000 men are your sample.
    

---

#### The "Soup" Analogy

The easiest way to remember the difference is to think about cooking a large pot of soup:

- **The Population:** The entire pot of soup.
    
- **The Sample:** The single spoonful you taste to see if it needs more salt.
    

You don't need to drink the entire pot (the population) to know how it tastes; you can make a highly accurate judgment based on just one well-stirred spoonful (the sample).

Would you like to go over the different methods for picking a good, unbiased sample from a population?
### **Mean**

The mean is the mathematical average of a dataset. You calculate it by adding all the observations together and dividing by the total number of observations.

It is the most commonly used measure to find the "center" or typical value of your data, but keep in mind that it is highly sensitive to outliers (extreme high or low values).

Here is the formula for the sample mean (often written as $\bar{x}$):

$$\bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n}$$

In plain terms, you just add up all your observations and divide by the total number of observations ($n$).

**Example:** Let's say you have the following dataset of 7 numbers: **2, 12, 5, 7, 6, 7, 3**.

1. **Add them all up:** $2 + 12 + 5 + 7 + 6 + 7 + 3 = 42$.
2. **Count the observations:** There are 7 numbers, so $n = 7$.
3. **Divide the sum by the count:** $\frac{42}{7} = 6$.

So, the mean of this dataset is **6**.

#### Sample Mean & Population Mean

Here is the breakdown of the population mean and sample mean, including their formulas and a shared example to show the difference.

![population vs sample in statistics, AI generated](https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRi3nWXHz07jq3jUkBRyvxziLunhF2JVQkAo3m5dsVzDH-SlEx1zl0mJ6R6oJVfyboENVbeLwHdhZsR2WLhvbYEV5ObuhM3YstHOpxAuzQQFx3nk7w)

#### 1. Population Mean ($\mu$)

The population mean is the average of _all_ the values in an entire group you are studying. It is considered a true parameter of the population.

- **Symbol:** $\mu$ (the Greek letter mu)
    
- **Formula:**
    
    $$\mu = \frac{\sum_{i=1}^{N} X_i}{N}$$
    
    - $\sum$ = "Sum of"
        
    - $X_i$ = Each individual value in the population
        
    - $N$ = The total number of items in the population
        

#### 2. Sample Mean ($\bar{x}$)

The sample mean is the average of a subset (a sample) drawn from the larger population. It is used as an estimate or "statistic" to guess the true population mean.

- **Symbol:** $\bar{x}$ (pronounced "x-bar")
    
- **Formula:**
    
    $$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$$
    
    - $\sum$ = "Sum of"
        
    - $x_i$ = Each individual value in the sample
        
    - $n$ = The total number of items in the sample
        

---

#### Example Scenario

Let's say you own a small startup with exactly **5 employees**. You want to look at the ages of your employees. Because the company is so small, you have access to everyone's age: **22, 25, 28, 30, and 35**.

**Calculating the Population Mean ($\mu$):**

Since these 5 people make up your _entire_ company, this is your population.

$$\mu = \frac{22 + 25 + 28 + 30 + 35}{5}$$

$$\mu = \frac{140}{5} = 28$$

The population mean age of your employees is exactly **28 years old**.

**Calculating the Sample Mean ($\bar{x}$):**

Now, imagine you couldn't survey everyone, so you randomly selected a sample of just **3 employees** to estimate the average age. You happen to select the employees who are **25, 28, and 35**.

$$\bar{x} = \frac{25 + 28 + 35}{3}$$

$$\bar{x} = \frac{88}{3} \approx 29.33$$

The sample mean age is approximately **29.33 years old**.

Notice how the sample mean ($\bar{x} \approx 29.33$) is slightly different from the true population mean ($\mu = 28$). This difference is known as **sampling error**.

---

#### Adding & Multiplying Constant for mean

The rule for changing the mean is wonderfully simple: **Whatever you do to every single value in your dataset, the exact same thing happens to the mean.** This applies to both the sample mean ($\bar{x}$) and the population mean ($\mu$).

Here is the mathematical breakdown of how adding and multiplying constants affects your average.

#### 1. Adding (or Subtracting) a Constant

If you add a constant value (let's call it $c$) to every single data point in your set, the new mean will simply be the old mean plus that constant. The same rule applies to subtraction.

- **The Rule:** If new data $y_i = x_i + c$, then the new mean $\bar{y} = \bar{x} + c$.
    
- **The Proof:**
    
    $$\bar{y} = \frac{\sum_{i=1}^{n} (x_i + c)}{n}$$
    
    $$\bar{y} = \frac{\sum_{i=1}^{n} x_i + \sum_{i=1}^{n} c}{n}$$
    
    $$\bar{y} = \bar{x} + \frac{n \cdot c}{n} = \bar{x} + c$$
    

**Example:** Imagine a class takes a math test, and the average score is **45**. The teacher realizes a question was unfair and decides to give every student **+5 bonus points**. You don't need to recalculate everyone's score to find the new average; you just add 5 to the old average.

- New Mean = $45 + 5 = 50$
    

#### 2. Multiplying (or Dividing) by a Constant

If you multiply every data point in your set by a constant value (let's call it $k$), the new mean will be the old mean multiplied by that constant. The same rule applies to division.

- **The Rule:** If new data $y_i = k \cdot x_i$, then the new mean $\bar{y} = k \cdot \bar{x}$.
    
- **The Proof:**
    
    $$\bar{y} = \frac{\sum_{i=1}^{n} (k \cdot x_i)}{n}$$
    
    $$\bar{y} = k \cdot \left( \frac{\sum_{i=1}^{n} x_i}{n} \right)$$
    
    $$\bar{y} = k \cdot \bar{x}$$
    

**Example:**

Suppose you measure the lengths of several pieces of wood in inches, and the mean length is **10 inches**. You decide you want the measurements in centimeters instead. Since 1 inch = 2.54 cm, you multiply every measurement by **2.54**.

- New Mean = $10 \cdot 2.54 = 25.4$ cm.
    

---

#### Combining Both (Linear Transformation)

In statistics, you will often see these combined into an equation like $Y = mX + c$ (a linear transformation). You can apply the exact same formula to the mean:

$$\bar{y} = m\bar{x} + c$$

Would you like to know how adding or multiplying a constant affects the **variance** and **standard deviation**? (Spoiler: they behave very differently than the mean!)

### **Mean for Grouped Data**

When you have a large amount of data, it is often organized into a frequency table to make it easier to read. The way you calculate the mean changes slightly depending on whether you have exact values or ranges (class intervals).

Here is the breakdown and formulas for both scenarios.

#### 1. Grouped Data with Exact Values (Discrete Frequency)

In this scenario, you know the exact data points ($x_i$), but instead of listing them out one by one, you are given a count (frequency, $f_i$) of how many times each value occurs.

- **Formula (Direct Method):**
    
    $$\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$$
    
    - $\sum f_i x_i$ = The sum of each value multiplied by its frequency.
        
    - $\sum f_i$ = The total number of observations (total frequency, often called $N$ or $n$).
        

**Example Scenario:**

Imagine you ask 10 students how many books they read last month.

|**Number of Books (xi​)**|**Number of Students (fi​)**|**fi​⋅xi​ (Total Books)**|
|---|---|---|
|**1**|5|$1 \cdot 5 = 5$|
|**2**|3|$2 \cdot 3 = 6$|
|**3**|2|$3 \cdot 2 = 6$|
|**Total**|$\sum f_i = 10$|$\sum f_i x_i = 17$|

**Calculation:**

$$\bar{x} = \frac{17}{10} = 1.7$$

The mean number of books read is **1.7 books per student**.

---

#### 2. Grouped Data with Class Intervals (Continuous Data)

When data is grouped into ranges (like 0-10, 10-20), you no longer know the exact individual values. To calculate the mean, you must first find the **class mark** (the midpoint) of each interval to represent that entire group.

- **Formula to find the Class Mark ($x_i$):**
    
    $$x_i = \frac{\text{Lower Limit} + \text{Upper Limit}}{2}$$
    
- **Formula for the Mean (Direct Method):**
    
    $$\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$$
    
    _(Notice the formula is exactly the same as above; the only difference is that $x_i$ is now a midpoint instead of a raw value)._
    

**Example Scenario:**

Suppose you have the test scores of 20 students, grouped into ranges of 10 points.

| **Score Range (Class)** | **Number of Students (fi​)** | **Class Mark / Midpoint (xi​)** | **fi​⋅xi​**          |
| ----------------------- | ---------------------------- | ------------------------------- | -------------------- |
| **0 - 10**              | 2                            | $\frac{0+10}{2} = 5$            | $2 \cdot 5 = 10$     |
| **10 - 20**             | 8                            | $\frac{10+20}{2} = 15$          | $8 \cdot 15 = 120$   |
| **20 - 30**             | 10                           | $\frac{20+30}{2} = 25$          | $10 \cdot 25 = 250$  |
| **Total**               | $\sum f_i = 20$              |                                 | $\sum f_i x_i = 380$ |


**Calculation:**

$$\bar{x} = \frac{380}{20} = 19$$

The estimated mean test score for the class is **19**.

_(Note: We call this an "estimated" mean because by grouping the data into ranges, we lost the exact original scores, so we assume everyone in the 10-20 range scored exactly a 15)._

---

If your class intervals have very large numbers, multiplying them can become tedious without a calculator. Would you like to see the **Assumed Mean Method** or the **Step-Deviation Method**, which are shortcuts designed to make the math easier for large numbers?

### **Mode**

The **mode** is the value that appears most frequently in a dataset. Unlike the mean, which is calculated using every number, the mode is simply about finding the most popular or common value.

A dataset can have one mode (unimodal), two modes (bimodal), multiple modes (multimodal), or no mode at all if every number appears the exact same number of times.

Here is how to find it for different types of data, along with what happens when you alter the data.

#### 1. Mode for Raw/Ungrouped Data

For raw data, there is no complex formula. You just count the frequencies and find the one that occurs the most.

**Example:**

Imagine you record the number of cups of coffee you drink each day for a week: **1, 2, 2, 3, 2, 4, 1**

- The number 1 appears twice.
    
- The number 2 appears **three times**.
    
- The numbers 3 and 4 appear once.
    
- **Mode = 2**
    

---

#### 2. Formula for Grouped Data (Class Intervals)

When data is grouped into class intervals (like 10-20, 20-30), you cannot see the exact individual values. Instead, you first identify the **modal class** (the interval with the highest frequency) and then use a formula to estimate where the exact mode falls within that interval.

- **The Formula:**
    
    $$Mode = l + \left( \frac{f_1 - f_0}{2f_1 - f_0 - f_2} \right) \cdot h$$
    
    - $l$ = Lower limit of the modal class
        
    - $h$ = Size of the class interval
        
    - $f_1$ = Frequency of the modal class
        
    - $f_0$ = Frequency of the class right _before_ the modal class
        
    - $f_2$ = Frequency of the class right _after_ the modal class
        

**Example Scenario:**

Let's look at the ages of people at a community center.

|**Age Range**|**Number of People (f)**|
|---|---|
|**0 - 10**|4|
|**10 - 20**|8|
|**20 - 30**|12|
|**30 - 40**|5|

**Step A: Find the Modal Class**

The highest frequency is **12**, which corresponds to the **20 - 30** age range. This is our modal class.

**Step B: Identify the Variables**

- $l = 20$ (lower limit of the 20-30 class)
    
- $h = 10$ (the gap between 20 and 30)
    
- $f_1 = 12$ (frequency of the modal class)
    
- $f_0 = 8$ (frequency of the class before, 10-20)
    
- $f_2 = 5$ (frequency of the class after, 30-40)
    

**Step C: Plug into the Formula**

$$Mode = 20 + \left( \frac{12 - 8}{2(12) - 8 - 5} \right) \cdot 10$$

$$Mode = 20 + \left( \frac{4}{24 - 13} \right) \cdot 10$$

$$Mode = 20 + \left( \frac{4}{11} \right) \cdot 10$$

$$Mode = 20 + \left( 0.3636 \right) \cdot 10 \approx 20 + 3.64 = 23.64$$

The estimated mode is **23.64 years old**.

---

#### 3. Adding or Multiplying a Constant

The mode behaves exactly like the mean when you add, subtract, multiply, or divide by a constant. Because shifting or stretching the data happens to _every_ data point, the most frequent value shifts or stretches by that exact same amount.

- **Adding/Subtracting:** If you add a constant $c$ to every value, the new mode is the old mode $+ c$.
    
    - _Example:_ If the mode of a test score is 75, and the teacher gives everyone $+5$ points, the new mode is **80**.
        
- **Multiplying/Dividing:** If you multiply every value by a constant $k$, the new mode is the old mode $\cdot k$.
    
    - _Example:_ If the mode length of a component is 5 inches, and you convert it to centimeters by multiplying by 2.54, the new mode is $5 \cdot 2.54 =$ **12.7 cm**.
        

**Combined (Linear Transformation):**

If your new dataset $Y$ is created from an old dataset $X$ using the formula $Y = mX + c$, then:

$$Mode_Y = m \cdot Mode_X + c$$

---

Would you like to look at the **Median** next, or would you be interested in the empirical formula that neatly connects the Mean, Median, and Mode together?

### Median

The **median** is the exact middle value of a dataset. It splits your data perfectly in half: 50% of the numbers will be smaller than the median, and 50% will be larger.

**The Golden Rule for the Median:** Before you do any math, you **must** arrange your data in order, usually from smallest to largest (ascending order). If you skip this step, your answer will be wrong!

The formula to find the median changes slightly depending on whether you have an odd or even number of total observations (let's call the total number of observations $n$).

---

#### 1. When the Number of Observations ($n$) is ODD

When you have an odd number of data points, there will be one perfect middle number. The formula tells you the _position_ of that middle number.

- **The Formula for Position:**
    
    $$\text{Median Position} = \frac{n + 1}{2}\text{th term}$$
    

**Example Scenario:**

You record the number of hours you spent studying over **5 days**: 4, 1, 7, 3, 5.

_(Here, $n = 5$, which is an odd number)._

**Step A: Sort the Data**

Put the hours in order from smallest to largest: **1, 3, 4, 5, 7**.

**Step B: Find the Position**

$$\text{Position} = \frac{5 + 1}{2} = \frac{6}{2} = 3\text{rd term}$$

**Step C: Find the Value at that Position**

Look at your sorted list. The 3rd number in the list is 4.

- **Median = 4 hours**
    

---

#### 2. When the Number of Observations ($n$) is EVEN

When you have an even number of data points, there is no single middle number. Instead, there are _two_ numbers perfectly in the middle. To find the median, you have to find the average (mean) of those two middle numbers.

- **The Formula for the Two Positions:**
    
    The two middle numbers are located at the $\frac{n}{2}\text{th term}$ and the $\left(\frac{n}{2} + 1\right)\text{th term}$.
    
- **The Formula for the Median:**
    
    $$\text{Median} = \frac{\text{Value of } (\frac{n}{2})\text{th term} + \text{Value of } (\frac{n}{2} + 1)\text{th term}}{2}$$
    

**Example Scenario:**

Let's say you studied for one more day, so now you have **6 days** of data: 4, 1, 7, 3, 5, 8.

_(Here, $n = 6$, which is an even number)._

**Step A: Sort the Data**

Put the hours in order from smallest to largest: **1, 3, 4, 5, 7, 8**.

**Step B: Find the Two Middle Positions**

- First middle position: $\frac{6}{2} = 3\text{rd term}$
    
- Second middle position: $\frac{6}{2} + 1 = 3 + 1 = 4\text{th term}$
    

**Step C: Find the Values and Average Them**

Look at your sorted list.

- The 3rd term is **4**.
    
- The 4th term is **5**.
    
    Now, find the average of those two numbers:
    
    $$\text{Median} = \frac{4 + 5}{2} = \frac{9}{2} = 4.5$$
    
- **Median = 4.5 hours**
    

---

Just like with the mean and mode, calculating the median changes entirely when your data is grouped into class intervals (like 10-20, 20-30) because you have to use cumulative frequencies. Would you like to see the formula and an example for finding the median of grouped data?

---

Assuming you meant the **median**, the rule is wonderfully simple and exactly the same as it is for the mean and the mode!

Because the median is just the physical middle of your sorted data, if you shift or stretch every single number in your dataset, the middle number shifts or stretches by that exact same amount.

Here is how the math works out for both adding and multiplying:

#### 1. Adding (or Subtracting) a Constant

If you add a constant value (let's call it $c$) to every single data point, the new median will just be the old median plus that constant.

- **The Rule:** If new data $y_i = x_i + c$, then the $\text{New Median} = \text{Old Median} + c$.
    

**Example:**

Let's say the median wait time for a bus is **10 minutes**. A new construction project adds exactly **5 minutes** of delay to every single bus route.

- You don't need to recalculate all the data.
    
- $\text{New Median} = 10 + 5 = 15 \text{ minutes}$.
    

#### 2. Multiplying (or Dividing) by a Constant

If you multiply every data point in your set by a constant value (let's call it $k$), the new median will be the old median multiplied by that constant.

- **The Rule:** If new data $y_i = k \cdot x_i$, then the $\text{New Median} = k \cdot \text{Old Median}$.
    

**Example:**

Imagine you have a dataset of distances, and the median distance is **5 miles**. You want to convert your data to kilometers. Since 1 mile $\approx$ 1.61 kilometers, you multiply every data point by **1.61**.

- $\text{New Median} = 5 \cdot 1.61 = 8.05 \text{ kilometers}$.
    

---

#### Combining Both (Linear Transformation)

Just like with the mean and mode, if you do both operations at once using an equation like $Y = aX + b$, the median follows the exact same formula:

$$\text{Median}_Y = a \cdot \text{Median}_X + b$$

---

Since the Mean, Median, and Mode all share this exact same property, would you like to see the empirical formula that neatly connects all three of them together? Or are we ready to move on to calculating the **Variance** and **Standard Deviation**?

### **Measure of Dispersion**

Measures of dispersion describe the "spread" or variability of your data. While the mean tells you where the centre of your data is, dispersion tells you how scattered the numbers are around that centre.

Here are the most common measures:

- **Range:** The difference between the highest and lowest values ($Max - Min$). It is very simple to calculate but highly sensitive to extreme outliers.
- **Variance:** This takes every single observation into account and measures the squared deviations of the data values from the mean.
- **Standard Deviation:** This is simply the square root of the variance. It is the most commonly used measure because it brings the value back to the exact same units as your original data (like kilograms or centimetres).

Would you like to see the formulas and a quick example for calculating variance and standard deviation?

### **Outliers**

Outliers are data points that fall completely outside the general pattern of your dataset—essentially, they are unexpected exceptions or extreme values.

Here is how they affect different statistical measures:

- **Mean:** Highly sensitive. A single extreme high or low value will pull the average significantly in its direction.
- **Median:** Not sensitive. Since it only finds the middle value of a sorted list, extreme numbers at the ends do not shift it.
- **Mode:** Not affected. An outlier is a rare occurrence, so it won't change the most frequently repeated value.
- **Range:** Extremely sensitive. Because the range is simply the maximum minus the minimum, an outlier at either end changes the result entirely.
- **Variance and Standard Deviation:** Sensitive. Both measure how far your data deviates from the mean. Since the mean is pulled by the outlier, and these formulas square those distances, outliers will significantly inflate both your variance and standard deviation.

Does that help clarify why choosing the right measure is important when you have messy data? If you're ready, we can look at **percentiles** or **quartiles** next, which are great tools for dealing with datasets that have outliers.

### **Range**

The **Range** is the simplest measure of dispersion. It represents the total spread of your dataset by finding the difference between the largest and smallest values.

- **Formula:** $\text{Range} = \text{Max} - \text{Min}$.
- **Example:** For the dataset 1, 2, 3, 4, 5, the maximum value is 5 and the minimum value is 1. The range is $5 - 1 = 4$.

**Effect of adding or multiplying a constant:** Because the range relies entirely on the distance between the Max and Min, applying constants affects it just like it affects the standard deviation:

- **Adding a constant ($c$):** The range **does not change**. If you add $c$ to every number, both the highest and lowest numbers shift by the exact same amount, so the difference between them remains the same.
- **Multiplying by a constant ($c$):** The **new range = old range $\times c$**. Both the highest and lowest numbers are scaled by $c$, so the distance between them is also scaled by $c$.

Does that make sense? We can look at how outliers easily distort the range next, or we can move right into **variance**.

### **Variance**

Variance measures the average squared distance of your data points from the mean. Because we often work with a sample instead of an entire population, there are two slightly different formulas:

- **Population Variance ($\sigma^2$):** Used when you have data for the _entire_ population. **Formula:** $\frac{\sum (x_i - \bar{x})^2}{n}$.
- **Sample Variance ($s^2$):** Used when you only have a sample. Dividing by $n-1$ (instead of $n$) corrects for bias, giving a better estimate of the true population. **Formula:** $\frac{\sum (x_i - \bar{x})^2}{n-1}$.

#### **Example**

Consider the dataset: **68, 79, 38, 68, 35, 70, 61, 47, 58, 66**.

1. **Find the mean:** $\bar{x} = 59$.
2. **Find the squared deviations:** Subtract 59 from each number and square the result (e.g., $(68-59)^2 = 81$).
3. **Sum them up:** The sum of all these squared deviations is **1898**.
4. **Calculate Variances:**
    - **Population Variance:** $\frac{1898}{10} = \mathbf{189.8}$.
    - **Sample Variance:** $\frac{1898}{9} = \mathbf{210.89}$.

#### **Effect of Adding or Multiplying a Constant**

- **Adding a constant ($c$):** The variance **does not change** (New Variance = Old Variance). Shifting the whole dataset up or down doesn't change how spread out the numbers are from each other.
- **Multiplying by a constant ($c$):** The new variance is **$c^2 \times \text{Old Variance}$**. Because variance squares the distances, the multiplying factor also gets squared.

Since variance is measured in "squared units" (like kilograms squared), we usually take its square root to find the **Standard Deviation**. Would you like to look at that next, or shall we move on to **Percentiles and Quartiles**?

### **Standard Deviation**

The standard deviation is simply the square root of the variance. It is the most commonly used measure of dispersion because it brings the value back into the exact same units as your original data (like kilograms instead of "kilograms squared").

Yes, just like variance, there are two different formulas depending on whether you are working with a sample or the entire population:

- **Population Standard Deviation ($\sigma$):** $\sqrt{\frac{\sum (x_i - \bar{x})^2}{n}}$.
- **Sample Standard Deviation ($s$):** $\sqrt{\frac{\sum (x_i - \bar{x})^2}{n-1}}$.

#### **Example**

Using the same dataset from our variance example (where the population variance was 189.8 and the sample variance was 210.89):

- **Population SD:** $\sqrt{189.8} = \mathbf{13.78}$.
- **Sample SD:** $\sqrt{210.89} = \mathbf{14.52}$.

#### **Effect of Adding or Multiplying a Constant**

Because the standard deviation is just the square root of the variance, it behaves similarly:

- **Adding a constant ($c$):** The standard deviation **does not change**.
- **Multiplying by a constant ($c$):** The new standard deviation is **$c \times \text{Old Standard Deviation}$**.

Does that make sense? If you feel comfortable with these measures of spread, we can move on to **Percentiles and Quartiles** next.

### **Percentile**

A **percentile** is a value below which a specific percentage of your data falls. For example, the 90th percentile is the number that is higher than 90% of the data and lower than 10% of the data.

#### **How to Compute Percentiles**

To find the $100p$ percentile (where $p$ is the decimal version of the percentage, like $0.25$ for 25%), follow these steps:

1. **Sort the data** in increasing order.
2. **Calculate the position:** Multiply the total number of observations ($n$) by your percentage decimal ($p$) to find $np$.
3. **Find the value:**
    - **If $np$ is a decimal:** Round _up_ to the next whole integer. The number in that position is your percentile.
    - **If $np$ is a whole number:** Take the average of the number in the $np$ position and the number in the next position ($np + 1$).

#### **Examples**

Let's use this sorted dataset of 10 numbers ($n = 10$): **35, 38, 47, 58, 61, 66, 68, 68, 70, 79**.

- **Example 1: Computing the 25th Percentile ($p = 0.25$)**
    
    - Calculate $np$: $10 \times 0.25 = 2.5$.
    - Since 2.5 is a decimal, round up to the next integer, which is 3.
    - The 3rd number in our sorted list is **47**.
- **Example 2: Computing the 50th Percentile ($p = 0.50$)**
    
    - Calculate $np$: $10 \times 0.50 = 5$.
    - Since 5 is a whole number, we must average the 5th and 6th numbers.
    - The 5th number is 61 and the 6th number is 66.
    - Average them: $\frac{61 + 66}{2} = \mathbf{63.5}$.

Does this straightforward method make sense? If you are comfortable with this, we can easily move on to **Quartiles** and the **Five Number Summary**, which are built entirely on these percentile calculations.

### **Quartiles**

Quartiles are specific percentiles that divide your sorted dataset into four equal parts:

- **Q1 (First Quartile):** The 25th percentile (25% of the data falls below this value).
- **Q2 (Second Quartile):** The 50th percentile (this is exactly the same as the **median**).
- **Q3 (Third Quartile):** The 75th percentile.

The **Five Number Summary** is a concise way to describe the center and spread of your data using these exact points. It consists of:

1. **Minimum**
2. **Q1**
3. **Q2 (Median)**
4. **Q3**
5. **Maximum**

Would you like to see how to use these quartiles to find the Interquartile Range (IQR), or are you ready to move on to our next major topic: finding the association between two different variables?

### **Interquartile Range (IQR)**

The Interquartile Range (IQR) is simply the difference between your third quartile (Q3) and your first quartile (Q1). The formula is:

$$IQR = Q_3 - Q_1$$

It is used as a measure of dispersion (spread) that specifically describes the middle 50% of your dataset. Because it only focuses on the middle values, the IQR is a highly reliable tool when your data contains extreme outliers that would otherwise distort the standard Range.

Would you like to see a quick example of calculating the IQR using a dataset, or are you ready to look at how we measure the association between two different variables?

#### Calculating the IQR using a dataset

Here is how you calculate the IQR step-by-step:

1. **Sort the data** in increasing order.
2. **Find Q1 (First Quartile):** This is the 25th percentile. Multiply your total number of observations ($n$) by 0.25 to find its position.
3. **Find Q3 (Third Quartile):** This is the 75th percentile. Multiply $n$ by 0.75 to find its position.
4. **Subtract:** $IQR = Q_3 - Q_1$.

**Example:** Imagine you have a sorted dataset of 10 numbers: **35, 38, 47, 58, 61, 66, 68, 68, 70, 79**.

- **Find Q1:** $10 \times 0.25 = 2.5$. Because it's a decimal, round up to the 3rd position, which is **47**.
- **Find Q3:** $10 \times 0.75 = 7.5$. Round up to the 8th position, which is **68**.
- **Calculate IQR:** $68 - 47 = \mathbf{21}$.

Does this step-by-step breakdown make sense? If you feel comfortable with this, we can move on to measuring the association between two different variables, which was our next major topic!

### **Association between two numerical variables**

To explore the association between two numerical variables (like a person's age and their height), the best starting point is a **Scatter Plot**. This is a two-dimensional graph that displays pairs of data as dots, allowing you to visually spot patterns.

When looking at a scatter plot, we evaluate four main things:

- **Direction:** Does the overall pattern trend upwards or downwards?
- **Curvature:** Do the points appear to form a straight line or a curve?
- **Variation:** Are the dots tightly clustered around the pattern or widely scattered?
- **Outliers:** Are there any unexpected points that fall far away from the general group?

If the points roughly form a straight line, we can measure the exact strength of that relationship using **Correlation** (which we briefly touched on earlier) or by **fitting a line** through the data to understand the trend and make predictions.

Would you like to look closer at the math behind Correlation, or would you prefer to learn about fitting a straight line through your data?

### **Covariance**

Covariance measures the strength and direction of the linear relationship between two numerical variables.

It looks at how the variables change together. If larger $x$-values tend to pair with larger $y$-values, the covariance is positive. If larger $x$-values pair with smaller $y$-values, the covariance is negative.

Here are the formulas depending on your data:

- **Population Covariance:** $\frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{N}$
- **Sample Covariance:** $\frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{n-1}$

A major drawback of covariance is that its final number depends heavily on the original units of your data (like "kilograms $\times$ meters"), making it very difficult to interpret.

Would you like to walk through a quick example of calculating covariance, or should we jump straight to **Correlation**, which mathematically removes the messy units to give you a clean, easy-to-read number?

#### Interpret covariance 

**Covariance** takes it a step further: it measures how _two_ different variables change together. If one variable goes up, does the other go up, go down, or do its own random thing?

Here is how to interpret covariance:

- **Positive Covariance ($>0$):** The variables move in the same direction. (e.g., Hours spent studying and Exam scores).
    
- **Negative Covariance ($<0$):** The variables move in opposite directions. (e.g., Hours spent watching TV and Exam scores).
    
- **Zero Covariance ($=0$):** There is no predictable linear relationship between the two.
    

Just like variance, we have two different formulas depending on whether we are looking at the whole population or just a sample. Notice how the denominator rule ($N$ vs. $n-1$) is exactly the same as the one you spotted in your notes earlier!

#### 1. Population Covariance ($\sigma_{xy}$)

Use this when you have data for every single member of the group you are studying.

- **Formula:**
    
    $$\sigma_{xy} = \frac{\sum_{i=1}^{N} (x_i - \mu_x)(y_i - \mu_y)}{N}$$
    
    - $x_i, y_i$ = Each individual data point for variables X and Y
        
    - $\mu_x, \mu_y$ = The population means for X and Y
        
    - $N$ = Total number of items in the population
        

#### 2. Sample Covariance ($s_{xy}$ or $Cov(x,y)$)

Use this when you only have a subset of data and want to estimate the relationship for the larger population. It uses Bessel's correction ($n-1$) to prevent underestimating.

- **Formula:**
    
    $$s_{xy} = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{n - 1}$$
    
    - $\bar{x}, \bar{y}$ = The sample means for X and Y
        
    - $n$ = Total number of items in the sample
        

---

#### Example Scenario

Let's say you are tracking the number of hours spent solving math problems ($X$) and the score received on the weekly quiz ($Y$). We will look at a tiny dataset of just **3 students** to keep the math clean.

|**Student**|**Hours Studying (X)**|**Quiz Score (Y)**|
|---|---|---|
|**A**|2|50|
|**B**|4|70|
|**C**|6|90|

**Step 1: Find the Means ($\bar{x}$ and $\bar{y}$)**

- Mean of $X$ ($\bar{x}$): $\frac{2 + 4 + 6}{3} = \frac{12}{3} = \mathbf{4}$
    
- Mean of $Y$ ($\bar{y}$): $\frac{50 + 70 + 90}{3} = \frac{210}{3} = \mathbf{70}$
    

**Step 2: Calculate the deviations and multiply them**

We need to find $(x_i - \bar{x}) \cdot (y_i - \bar{y})$ for each student.

- **Student A:** $(2 - 4) \cdot (50 - 70) = (-2) \cdot (-20) = \mathbf{40}$
    
- **Student B:** $(4 - 4) \cdot (70 - 70) = (0) \cdot (0) = \mathbf{0}$
    
- **Student C:** $(6 - 4) \cdot (90 - 70) = (2) \cdot (20) = \mathbf{40}$
    

**Step 3: Sum the results**

$$\sum = 40 + 0 + 40 = \mathbf{80}$$

**Step 4: Calculate Covariance**

- **If this is a Sample (divide by $n-1$):**
    
    $$s_{xy} = \frac{80}{3 - 1} = \frac{80}{2} = \mathbf{40}$$
    
- **If this is the entire Population (divide by $N$):**
    
    $$\sigma_{xy} = \frac{80}{3} \approx \mathbf{26.67}$$
    

**The Takeaway:**

Because the covariance is a **positive number** (40 or 26.67), it mathematically proves what we can see intuitively: as the hours spent studying go up, the quiz scores also go up!

---

There is one big problem with covariance, though: the final number (like 40) is tied to the raw units of the data, so it's hard to tell if 40 is a "strong" relationship or a "weak" one.

Would you like to see how we fix this by calculating the **Correlation Coefficient**, which forces the answer to always be a neat, understandable number between -1 and 1?

### **Correlation**

When people talk about "correlation" in statistics, they are almost always referring to the **Pearson Correlation Coefficient** (usually represented by the letter **$r$**).

While covariance tells us _if_ two variables move together, it leaves us with a messy, unstandardized number. The Pearson correlation formula takes that covariance and scales it down so the answer always falls perfectly between **-1 and +1**.

Here is how to interpret the magic number $r$:

- **+1:** A perfect positive linear relationship (as one goes up, the other goes up in a perfectly straight line).
    
- **0:** Absolutely no linear relationship.
    
- **-1:** A perfect negative linear relationship (as one goes up, the other goes down).
    

---

#### The Formula

The most intuitive way to calculate the correlation coefficient is to use the covariance and the standard deviations of both variables.

- **The Formula:**
    
    $$r = \frac{s_{xy}}{s_x \cdot s_y}$$
    
    - $s_{xy}$ = The sample covariance of variables X and Y
        
    - $s_x$ = The sample standard deviation of variable X
        
    - $s_y$ = The sample standard deviation of variable Y
        

_(Note: There is also a longer "raw data" formula that doesn't require finding the covariance first, but this version shows exactly how correlation is just standardized covariance!)_

---

#### Example Scenario

Let's use the exact same dataset from our covariance example to see how this works. We tracked Hours Studying ($X$) and Quiz Scores ($Y$) for 3 students.

|**Student**|**Hours Studying (X)**|**Quiz Score (Y)**|
|---|---|---|
|**A**|2|50|
|**B**|4|70|
|**C**|6|90|

**Step 1: Get the Covariance ($s_{xy}$)**

We already calculated the sample covariance for this exact dataset in the previous step.

- $$s_{xy} = 40$$
    

**Step 2: Find the Standard Deviation of X ($s_x$)**

The mean of X is 4.

1. Variance of X ($s_x^2$) = $\frac{(2 - 4)^2 + (4 - 4)^2 + (6 - 4)^2}{3 - 1}$
    
    $$s_x^2 = \frac{4 + 0 + 4}{2} = \frac{8}{2} = 4$$
    
2. Standard Deviation ($s_x$) = $\sqrt{4} = \mathbf{2}$
    

**Step 3: Find the Standard Deviation of Y ($s_y$)**

The mean of Y is 70.

1. Variance of Y ($s_y^2$) = $\frac{(50 - 70)^2 + (70 - 70)^2 + (90 - 70)^2}{3 - 1}$
    
    $$s_y^2 = \frac{400 + 0 + 400}{2} = \frac{800}{2} = 400$$
    
2. Standard Deviation ($s_y$) = $\sqrt{400} = \mathbf{20}$
    

**Step 4: Plug it all into the Correlation Formula**

$$r = \frac{40}{2 \cdot 20}$$

$$r = \frac{40}{40}$$

$$r = \mathbf{1}$$

#### The Result

The correlation coefficient is exactly **1**. This means there is a **perfect positive linear relationship** between the hours studied and the quiz score. If you graphed these three students on a scatter plot, their dots would form a flawlessly straight line pointing upwards.

---

Pearson's $r$ is fantastic, but it only measures _linear_ (straight-line) relationships and can be heavily skewed by extreme outliers. Would you like to look at **Spearman's Rank Correlation Coefficient**, which solves both of these problems by ranking the data first?

As we touched on earlier, while covariance tells you if variables move together, the **Correlation Coefficient** standardizes that relationship into a neat number between **-1 and +1**.

- **+1** means a perfect positive relationship.
    
- **-1** means a perfect negative relationship.
    
- **0** means no relationship at all.
    

But standard correlation (Pearson's $r$) is usually meant for two numerical variables (like height and weight). What happens when you want to find the association between a **numerical variable** (like a test score) and a **categorical variable** (like whether a student passed or failed a prep course)?

This is exactly where the **Point-Biserial Correlation Coefficient ($r_{pb}$)** comes in.

---

#### What is Point-Biserial Correlation?

The point-biserial correlation is a special shortcut version of the standard Pearson correlation. It is specifically designed to measure the relationship between one **continuous numerical variable** and one **naturally binary categorical variable** (a category that only has two possible options, like Yes/No, Male/Female, or Pass/Fail).

To use the math, you simply assign the numbers **0** and **1** to your two categories.

#### The Formula

$$r_{pb} = \frac{\bar{X}_1 - \bar{X}_0}{s_x} \sqrt{\frac{n_1 n_0}{n(n-1)}}$$

**Here is what each piece means:**

- $\bar{X}_1$ = The mean of the numerical variable for the group coded as "1"
    
- $\bar{X}_0$ = The mean of the numerical variable for the group coded as "0"
    
- $s_x$ = The sample standard deviation of the _entire_ numerical dataset
    
- $n_1$ = The number of observations in group "1"
    
- $n_0$ = The number of observations in group "0"
    
- $n$ = The total number of observations ($n_1 + n_0$)
    

---

#### Example Scenario

Let's see if taking an optional weekend prep course (Categorical: Yes/No) is correlated with a student's final exam score (Numerical: 0-100).

We survey **5 students**. We will code "Yes" as **1** and "No" as **0**.

|**Student**|**Took Prep Course? (Y)**|**Exam Score (X)**|
|---|---|---|
|**A**|Yes (1)|85|
|**B**|Yes (1)|95|
|**C**|No (0)|70|
|**D**|No (0)|60|
|**E**|No (0)|80|

**Step 1: Group the data and find the means ($\bar{X}_1$ and $\bar{X}_0$)**

- **Group 1 (Took Course):** Scores are 85, 95.
    
    - $n_1 = 2$
        
    - $\bar{X}_1 = \frac{85 + 95}{2} = \mathbf{90}$
        
- **Group 0 (Did Not Take Course):** Scores are 70, 60, 80.
    
    - $n_0 = 3$
        
    - $\bar{X}_0 = \frac{70 + 60 + 80}{3} = \frac{210}{3} = \mathbf{70}$
        

**Step 2: Find the standard deviation of all scores ($s_x$)**

We need the standard deviation of all 5 scores (85, 95, 70, 60, 80).

1. Overall mean ($\bar{X}$) = $78$
    
2. Variances from mean squared: $(85-78)^2 + (95-78)^2 + (70-78)^2 + (60-78)^2 + (80-78)^2$
    
    - $49 + 289 + 64 + 324 + 4 = 730$
        
3. Sample variance ($s^2$) = $\frac{730}{5-1} = 182.5$
    
4. Standard deviation ($s_x$) = $\sqrt{182.5} \approx \mathbf{13.51}$
    

**Step 3: Plug everything into the Point-Biserial formula**

$$r_{pb} = \frac{90 - 70}{13.51} \sqrt{\frac{2 \cdot 3}{5(5 - 1)}}$$

$$r_{pb} = \frac{20}{13.51} \sqrt{\frac{6}{20}}$$

$$r_{pb} \approx 1.48 \cdot \sqrt{0.30}$$

$$r_{pb} \approx 1.48 \cdot 0.5477 \approx \mathbf{0.81}$$

#### The Result

The point-biserial correlation is **0.81**. Since this number is very close to +1, it indicates a **strong positive correlation** between taking the prep course and getting a higher exam score.

---

Now that you have the correlation coefficient, would you like to see how to calculate a **$p$-value** for it to determine if this result is statistically significant, or should we look at other correlation types like Spearman's rank?