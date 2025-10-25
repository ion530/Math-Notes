'use client';

import { useState } from 'react';
import LatexRenderer from '../../components/LatexRenderer';

const problems = [
  {
    id: '1',
    title: 'A8 IMO Shortlist 2020',
    category: 'Algebra',
    problem: `$\\ Let \\text{ } \\mathbb{R}^+ \\text{ be the set of positive real numbers.}\\\\ \\text{ Determine all functions } \\ f: \\mathbb{R}^+ \\to \\mathbb{R}^+ \\text{ such that:} \\\\ \\text{ for all positive real numbers } \\ x \\ and \\ y: \\ f(x + f(xy)) + y = f(x)f(y) + 1.$`,
    solution: `
      \\begin{aligned}
      &\\text{Firstly, we prove that } f(1) \\neq 1. \\\\
      \\\\
      &\\text{Assume } f(1) = 1 \\text{ and plug in } \\ x = y = 1. \\\\
      &\\ f(1 + f(1)) + 1 = f(1)f(1) + 1 \\\\
      &\\ f(2) + 1 = 1 + 1 \\\\
      &\\ f(2) = 1. \\\\
      \\\\
      &\\text{Now, plug in } x = 1, y = 2: \\\\
      &\\ f(1 + f(2)) + 2 = f(1)f(2) + 1 \\\\
      &\\ f(2) + 2 = 1 + 1 = 2 \\\\
      &\\ f(2) = 0 \\\\
      &\\text{which contradicts } f: \\mathbb{R}^+ \\to \\mathbb{R}^+. \\\\
      \\\\
      &\\text{Thus, for } γ = f(1): γ>1 \\text{ or } \\ γ<1 \\\\
      \\\\
      &\\text{Now, we can prove inductively that: } \\ f(x + \\frac{γ^n - 1}{γ - 1} \\ f(x)) \\ = γ^n f(x), \\text{ } \\forall n \\in \\mathbb{N} \\\\
      &\\underline{\\text{Base Case:}} \\\\
      &\\text{Plug in: } \\ x \\to \\ x, \\ y \\to 1\\implies \\\\ 
      &\\ f(x + f(x)) + 1 = f(x)f(1) + 1\\implies \\ f(x + f(x)) = γf(x) \\\\
      \\\\
      &\\underline{\\text{Inductive Step:}} \\\\
      &\\text{Assume } f(x + \\frac{γ^n - 1}{γ - 1} f(x)) = γ^n f(x) \\\\
      &\\text{Plug in: } \\ x \\to \\ x + f(x) \\implies \\ f(x + f(x) + \\frac{γ^n - 1}{γ - 1} f(x + f(x))) = γ^n f(x + f(x)) \\\\
      &\\text{Given that } f(x + f(x)) = γf(x) \\implies \\ f(x + f(x) + \\frac{γ^n - 1}{γ - 1} γf(x)) =  γ^{n+1} f(x) \\\\
      &\\text{But, } \\ f(x + f(x) + \\frac{γ^n - 1}{γ - 1} γf(x)) = f(x + [1 + γ \\frac{γ^{n} - 1}{γ - 1}] f(x)) = \\ f(x + \\frac{γ^{n+1} - γ + γ - 1}{γ - 1} f(x)) \\\\
      &\\text{Thus, } f(x + \\frac{γ^{n+1} - 1}{γ - 1} f(x)) = γ^{n+1} f(x) \\\\
      \\\\
      &\\text{Suppose that } \\ γ < 1. \\\\
      &\\text{Then, for any fixed positive real number } \\ x \\text{ as } \\ n \\to \\infty: \\ f(x + \\frac{1-γ^{n}}{1 - γ} f(x)) \\to 0. \\\\
      &\\text{This implies that } f \\text{ gets arbitrarily close to } \\ 0 \\text{ around } \\ x + \\frac{1}{1-γ} f(x), \\ \\forall x>0 \\\\
      &\\text{Notice that: } \\ f(x)f(y) + 1 - y = f(x + f(xy)) > 0 \\implies \\ f(x)f(y) > y - 1, \\ \\forall x, y>0 \\\\
      &\\text{Plugging in } \\ y = 2 \\implies \\ f(x)f(2) > 1 \\implies\\ f(x) > \\frac{1}{f(2)}, \\ \\forall x>0. \\\\
      &\\text{This Lower Bound Contradicts } f (\\mathbb{R}^+) \\text{ containing arbitrarily small positive values.}\\\\
      &\\text{Thus, } γ > 1. \\\\
      \\\\
      &\\text{Given } \\ γ>1 \\text{ taking the limit of } \\ f(x + \\frac{γ^n - 1}{γ - 1} f(x)) = γ^n f(x) \\text{ as } n \\to \\infty: \\\\
      &\\text{We conclude that the limit exists and is equal to infinity for all }\\ x>0. \\\\
      \\\\
      &\\text{Particularly, for } \\ x = 1: \\ f(1 + \\frac{γ^n - 1}{γ - 1} f(1)) = γ^n f(1) \\implies \\ f(\\frac{γ^{n+1} - 1}{γ - 1}) = γ^{n+1} \\\\
      &\\text{Given } \\ u = \\frac{γ^{n+1} - 1}{γ - 1} \\to \\infty \\text{ as } \\ n \\to \\infty \\implies\\ f(u) \\sim \\ (γ-1)u + 1, \\text{ as} \\ u \\to \\infty. \\\\
      \\\\
      &\\text{Now, we can re-write the original equation as: } \\ f(x) = \\frac{f(x + f(xy)) + y - 1}{f(y)} \\\\
      &\\text{By fixing } \\ x \\text{ to a positive real number and choosing } \\ y \\text{ to be arbitrary large:} \\\\
      &\\ f(x) = \\lim_{y \\to \\infty} \\frac{f(x + f(xy)) + y - 1}{f(y)} = \\lim_{y \\to \\infty} \\frac{f(x + (γ-1)xy + 1) + y - 1}{(γ-1)y + 1} \\\\
      &\\ f(x) = \\lim_{y \\to \\infty} \\frac{(γ-1)^2xy + (γ-1)x + y + γ - 1}{(γ-1)y + 1} = (γ-1)x + \\frac{1}{γ-1}. \\\\
      \\\\
      &\\text{Putting } \\ f(x) = (γ-1)x + \\frac{1}{γ-1} \\text{ back into the equation we find: } \\\\
      &\\ γ - 1 = 1 \\implies\\ γ = 2 \\implies \\ f(x) = x + 1. \\quad \\blacksquare
      \\end{aligned}
    `
  },
  {
    id: '2',
    title: 'C7 IMO Shortlist 2024',
    category: 'Combinatorics',
    problem: `$\\text{Let } N \\text{ be a positive integer and let } a_1, a_2, \\ldots \\text{ be an infinite sequence of positive}\\\\ \\text{integers. Suppose that, for each } n>N, a_n \\text{ is equal to the number of times} \\\\ \\ a_{n-1} \\text{ appears in the list } a_1, a_2, \\ldots, a_{n-1}. \\\\ \\text{} \\\\ \\text{Prove that at least one of the sequences } a_1, a_3, a_5, \\ldots \\text{ and } a_2, a_4, a_6, \\ldots \\\\ \\text{is eventually periodic.}$`,
    solution:`
      \\begin{aligned}
      &\\underline{\\text{Lemma 1:}} \\text{ The } \\ a_n \\text{ sequence in not bounded.    } \\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad \\\\
      \\\\
      &\\underline{\\text{First Proof:}} \\text{ Unbounded Sub-Sequence} \\\\
      &\\text{Assume that } a_n \\text{ is bounded by some positive integer } M. \\\\
      &\\text{Consider the Set: } \\ S = \\{ a_n \\mid \\ n \\in \\mathbb{N} \\} \\\\
      &\\ S \\subseteq \\{1, 2, 3, ..., M \\} \\implies \\ S \\text{ is a finite set} \\implies \\exists M'\\leq M \\text{ so that } \\ a_n \\\\ 
      &\\text{ takes the value } \\ M' \\text{ for infinitely many natural numbers n.} \\\\
      &\\text{Let } \\ b_k \\text{ be the iteration of those numbers. Meaning } \\ a_{b_k} = M', \\ \\forall k \\in \\mathbb{N} \\\\
      &\\ b_k \\text{ is the k-th number } \\ n \\text{ for which } \\ a_n = M' \\implies \\ a_{1 + b_k} = k \\text{, by definition of } \\ a_n. \\\\
      &\\text{But this means that } \\ a_{1 + b_k} \\text{ is an unbound sub-sequence of } \\ a_n, \\\\ 
      &\\text{contradicting } \\ a_n \\text{being bounded.} \\\\
      \\\\
      &\\underline{\\text{Second Proof:}} \\text{ Generalized Pigeonhole Principle} \\\\
      &\\text{Assume that } a_n \\text{ is bounded by some positive integer } M. \\\\
      &\\text{Consider the Sets :} \\ S_k = \\{n \\mid \\ a_n = k \\} \\text{, where } \\ 1 \\leq k \\leq M \\\\
      &\\text{Distributing } \\ a_1, a_2, a_3, ..., a_{M^2 + 1} \\text{ into the } M \\text{ sets } S_k \\text{ we get that:} \\\\
      &\\text{At least one set } \\ S \\text{ out of } \\ S_k \\text{ has at least } \\lceil \\frac{M^2 + 1}{M} \\rceil = M + 1 \\text{ elements.} \\\\
      &\\text{In Conclution, some value } k \\leq M \\text{ appears at least } M + 1 \\text{ times, with } \\ a_{max{S_k}} \\\\
      &\\text{being the (M+1)-th time it appears } \\implies\\ a_{1 + max{S_k}} = M + 1 > M \\text{, Contradiction.} \\\\
      \\\\
      \\\\
      &\\underline{\\text{Lemma 2:}} \\text{ The number 1 appears infinitely many times in } \\ a_n. \\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad \\\\
      \\\\
      &\\underline{\\text{Proof:}} \\text{ Since the sequence in unbounded, new numbers appear infinitely many times.} \\\\
      &\\text{Each time a new number appears in the sequence, the following number is 1.} \\\\
      \\\\
      \\\\
      &\\underline{\\text{Lemma 3:}} \\text{ Big enouph numbers stop appearing in the sequence at some point.} \\\\
      \\\\
      &\\underline{\\text{Proof:}} \\text{ By Contradiction} \\\\ 
      &\\text{If there exists a number } \\ L \\text{ that appears finititely many times in the sequence,} \\\\
      &\\text{then all numbers greater than } L \\text{ appear finitely many times in the sequence.} \\\\
      &\\text{This is because, for a number} \\ k \\text{ greater than } L \\text{ to appear in the sequence, some} \\\\
      &\\text{number needs to appear } \\ k>L \\text{ times} \\implies \\text{ the number shall appear the L-th time,} \\\\
      &\\text{but after the L-th time it appears, by definition, L shall appear again.} \\\\
      &\\text{This means that } k \\text{ appears at most } L \\in \\mathbb{N} \\text{ times, in the sequence}. \\\\ 
      \\\\
      &\\text{We need to prove that such a number exists.} \\\\
      &\\text{Take a number} \\ L \\text{ greater than both } N \\text{ and all the numbers that appear before } \\ a_N. \\\\
      &\\text{This number appears for the first time after the N first arbitrarily picked numbers.} \\\\
      &\\text{We can prove that } L \\text{ will not appear } L \\text{ (or more) times in the sequence.} \\\\
      &\\text{Suppose } L \\text{ appears } L \\text{ times in the sequence.} \\\\
      &\\text{Consider the } L \\text{-th appearance of } \\ L \\text{ in the sequence.} \\\\
      &\\text{After the L-th appearance of L, by definition, L appears again.} \\\\
      &\\text{Notice that the L numbers before each appearance of L must be less than L.} \\\\
      &\\text{That is, because they can't be equal to L (the L-th appearance of L is unique) and } \\\\
      &\\text{if there was some k greater than L so that (k, L) appears, it would suggest that k} \\\\
      &\\text{appeared L times. But for each appearance of k>L there must be an appearance of L} \\\\
      &\\text{since for a number to appear more than L times it must first appear L times.} \\\\
      &\\text{This is a contradiction, since these appearances of L are at least L in multitude, but} \\\\ &\\text{prior to the L-th appearance of L that we considered at first.} \\\\
      &\\text{Thus, we have L predecessor of L that are less than L. By the Pigeonhole Principle,} \\\\
      &\\text{at least two of them must be equal. But this means that a number appears in the} \\\\ &\\text{sequence for the L-th time twice, which is clearly a contradiction.} \\\\
      \\\\
      \\\\
      &\\underline{\\text{Observation:}} \\\\
      &\\text{Lemma 3 suggests that there are only finitely many numbers that appear infinitely} \\\\
      &\\text{many times in the sequence. Define the finite set } S \\text{ of these numbers.} \\\\
      &\\text{Eventually, only one of the sequences } a_1, a_3, a_5, \\ldots \\text{ or } a_2, a_4, a_6, \\ldots \\text{ will contain} \\\\
      &\\text{numbers in } S. \\text{ This is because the number of appearances of a number in } \\ S \\\\
      &\\text{gets indefinitely big, since they appear infinitely many times, surpassing L.} \\\\
      &\\text{Thus } a_n \\in S \\implies\\ a_{n+1} \\notin S. \\text{ Moreover, } a_{n+1}>L \\implies a_{n+2} < L \\text{, but we've chosen} \\\\
      &\\text{n so that small numbers appear only in } S. \\text{ Thus, } a_{n+2} \\in S \\text{ as well.} \\\\
      &\\text{The following pattern appears:} \\\\ &\\ a_n \\in S \\implies a_{n+1} \\notin S \\implies a_{n+2} \\in S \\implies a_{n+3} \\notin S \\implies a_{n+4} \\in S \\implies ... \\\\
      &\\text{Thus, } \\ a_n, a_{n+2}, a_{n+4}, \\ldots \\in S \\text{ is a bounded subsequence, for large enouph values of n.} \\\\
      &\\text{Also, notice that } S = \\{1, 2, 3, ..., |S| \\} \\text{ since a number can not appear infinetely many} \\\\ 
      &\\text{times if its predecessor has not appeared infinitely many times.} \\\\
      \\\\
      \\\\
      &\\underline{\\text{lemma 4:}} \\text{ The differences between the terms of the unbounded subsequence between} \\\\
      &\\text{two consecutive appearances of a number in } S \\text{ are bounded.} \\\\
      \\\\
      &\\underline{\\text{Proof:}} \\\\
      &\\text{Case 1: There is an n so that 1 has appeared more than any other number in } S. \\\\
      &\\text{Let's suppose that this number is } M. \\text{ Then, the sequence is as follows: } \\\\
      &\\ ... , 1, M, 1, (M + 1), 1, (M + 2), 1, (M + 3), 1, ... \\text{ which yields differences of } 1. \\\\  
      \\\\
      &\\text{Case 2: There is no such n. Thus, there is an number } K \\in S \\text{ that appears more.} \\\\
      &\\ K > 1 \\implies \\text{The number of appearances of K can only differ a bounded amount} \\\\
      &\\text{from the number of appearances of 1. This is because, every appearance of } K > 1 \\\\
      &\\text{ can be mapped to an appearance of 1 before it}. \\\\
      &\\text{Consider } K_0 \\text{ (the smallest such K in S) and } D \\text{ (the mentioned bound).} \\\\
      &\\text{So each element less or equal to } K_0 \\text{ in S appears as much as 1 (give or take D).} \\\\
      &\\text{Suppose } K_0 < |S|. \\text{ Then, any number } K' > K_0 \\text{ appears indefinitely less times than } 1. \\\\
      &\\text{Take an appearance of } a_n = K' \\in S \\implies a_{n+1} \\text{ is the number of appearances of } K', \\\\
      &\\text{which is less than the number of appearances of } 1 \\text{ minus D.} \\\\
      &\\text{This must be at least the } (K_0 + 1) \\text{-th appearance of } a_{n+1} \\text{, since every number that} \\\\
      &\\text{has appeared more than } a_{n+1} \\text{ times also has appeared exactly that many times.} \\\\
      &\\text{But, we have at least } K_0 \\text{ such numbers (the numbers in S less or equal to } K_0). \\\\
      &\\text{Thus, } a_{n+2} \\geq K_0 + 1 \\implies a_{n+2} > K_0 = K'' .\\\\
      &\\text{Notice how we started with an arbitrary } a_n = K' > K_0 \\text{ and implied that } a_{n+2} > K_0. \\\\
      &\\text{Thus, we can repeat this indefinitely, showing that } a_n, a_{n+2}, a_{n+4}, ... > K_0. \\\\
      &\\text{This contradicts every number in } S \\text{ appearing indefinitely.} \\text{ Thus } K_0 = |S| . \\\\
      &\\text{In Conclution, all numbers in } S \\text{ appear approximately as much as 1 (give or take D).} \\\\
      \\\\
      \\\\
      &\\underline{\\text{Conclusion:}} \\\\
      &\\ a_n, a_{n+2}, a_{n+4}, \\ldots \\text{ is a bounded sequence}. \\\\
      &\\ a_{n+1}, a_{n+3}, a_{n+5}, \\ldots \\text{ can be expressed as the total appearances of 1s plus} \\\\ &\\text{a bounded sequence.} \\\\
      &\\text{Notice that both of the bounded sequences mentioned can be determined by } \\\\
      &\\text{their previous |S| values. Thus, since the combinations of values is finite they} \\\\ &\\text{will repeat. In conclution, both bounded sequences are eventually periodic.} \\\\
      &\\text{So } a_n, a_{n+2}, a_{n+4}, \\ldots \\text{ will eventually be periodic.} \\quad \\blacksquare
      \\end{aligned} 
    ` 
  },
  {
    id: '3',
    title: 'A7 IMO Shortlist 1988',
    category: 'Algebra',
    problem: `$\\text{Let c be the largest root of } \\ x^3 - 3x^2 + 1. \\\\ \\text{Show that } \\lfloor c^{1788} \\rfloor \\text{ and } \\lfloor c^{1988} \\rfloor \\text{ are multiples of 17.}$`,
    solution:`
    \\begin{aligned}
    &\\text{Consider the polynomial } \\ p(x) = x^3 - 3x^2 + 1. \\\\
    &\\text{Notice that: } \\\\ &\\ p(-\\frac{1}{\\sqrt3}) = -(\\frac{1}{\\sqrt3})^3 < 0 \\\\ &\\ p(0) = 1 > 0 \\\\ &\\ p(\\frac{2}{3}) = -\\frac{1}{27} < 0 \\\\ &\\ p(2) = -3 < 0 \\\\ &\\ p(3) = 1 > 0 \\\\
    &\\text{Due to Bolzano's theorem, if } a < b < c \\text{ are the roots of p(x),} \\\\
    &\\text{then } a \\in (-\\frac{1}{\\sqrt3}, 0), \\ b \\in (0, \\frac{2}{3}), \\ c \\in (2, 3). \\\\
    \\\\
    &\\text{By Viete's relations, we know that: } \\\\ &\\ a + b + c = 3 \\\\ &\\ ab + ac + bc = 0 \\\\ &\\ abc = -1 \\\\
    &\\implies 9 = (a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + ac + bc) = a^2 + b^2 + c^2 \\\\
    \\\\
    &\\text{Now, notice that for any root } x: \\\\ &\\ x^3 = 3x^2 - 1 \\\\ &\\ x^4 = 3x^3 - x = 9x^2 - x - 3 \\\\ &\\ x^5 = 3x^4 - x^2 = 27x^2 - 3x - 9 - x^2 = 26x^2 - 3x - 9 \\\\ &\\ ... \\\\ &\\ x^n = a_n x^2 + b_n x + c_n, \\text{ where } a_n, b_n, c_n \\in \\mathbb{Z} \\\\
    \\\\
    &\\text{We can find a recurrence relation for } a_n, b_n, c_n: \\\\
    &\\ x^{n+1} = xx^n \\implies a_{n+1} x^2 + b_{n+1} x + c_{n+1} = x(a_n x^2 + b_n x + c_n) \\\\
    &\\ a_{n+1} x^2 + b_{n+1} x + c_{n+1} = a_n x^3 + b_n x^2 + c_n x \\\\
    &\\ a_{n+1} x^2 + b_{n+1} x + c_{n+1} = a_n(3x^2 - 1) + b_n x^2 + c_n x = (3a_n + b_n) x^2 + c_nx - b_n \\\\
    &\\implies \\begin{pmatrix} a_{n+1} \\\\ b_{n+1} \\\\ c_{n+1} \\end{pmatrix} = \\begin{pmatrix} 3 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ -1 & 0 & 0 \\end{pmatrix} \\begin{pmatrix} a_n \\\\ b_n \\\\ c_n \\end{pmatrix} \\implies \\begin{pmatrix} a_n \\\\ b_n \\\\ c_n \\end{pmatrix} = \\begin{pmatrix} 3 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ -1 & 0 & 0 \\end{pmatrix}^{n-3} \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix} \\\\
    &\\text{Let } A = \\begin{pmatrix} 3 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ -1 & 0 & 0 \\end{pmatrix}. \\text{ Then, } x^n = \\begin{pmatrix} x^2 & x & 1 \\end{pmatrix} A^{n-3} \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix}. \\\\
    \\\\
    &\\text{Now, using the previous results by Viete's relations, we can find:} \\\\
    &\\ a^n + b^n + c^n = \\begin{pmatrix} a^2 + b^2 + c^2 & a + b + c & 3 \\end{pmatrix} A^{n-3} \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 9 & 3 & 3 \\end{pmatrix} A^{n-3} \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix} \\\\
    &\\implies a^n + b^n + c^n = 3\\begin{pmatrix} 3 & 1 & 1 \\end{pmatrix} A^{n-3} \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix}. \\\\
    &\\text{But, this implies that } a^n + b^n + c^n \\text{ is a linear combination of natural numbers.} \\\\
    &\\text{Thus, } a^n + b^n + c^n \\in \\mathbb{Z}, \\ \\forall n \\in \\mathbb{N}. \\\\
    &\\text{Also notice, } \\forall n > 1, a^n + b^n \\leq (\\frac{1}{\\sqrt3})^2 + (\\frac{2}{3})^2 < \\frac{1}{3} + \\frac{2}{3} = 1 \\\\
    &\\implies a^n + b^n + c^n - 1 < c^n < a^n + b^n + c^n \\implies \\lfloor c^n \\rfloor = a^n + b^n + c^n - 1 \\\\
    &\\implies \\lfloor c^n \\rfloor = 3\\begin{pmatrix} 3 & 1 & 1 \\end{pmatrix} A^{n-3} \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix} - 1.
    \\\\
    \\\\
    &\\text{Ofcourse, calculating the n=1788-3=1785 power of the matrix A is not feasible.} \\\\
    &\\text{Motivated by Fermat's Little Theorem, we can conjecture that } A^{16} \\equiv I \\ (mod \\ 17). \\\\
    &\\ A^2 \\equiv \\begin{pmatrix} 3 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ -1 & 0 & 0 \\end{pmatrix} \\begin{pmatrix} 3 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ -1 & 0 & 0 \\end{pmatrix} (mod17) \\equiv \\begin{pmatrix} 9 & 3 & 1 \\\\ 16 & 0 & 0 \\\\ 14 & 16 & 0 \\end{pmatrix} mod(17) \\\\
    &\\ A^4 \\equiv \\begin{pmatrix} 9 & 3 & 1 \\\\ 16 & 0 & 0 \\\\ 14 & 16 & 0 \\end{pmatrix} \\begin{pmatrix} 9 & 3 & 1 \\\\ 16 & 0 & 0 \\\\ 14 & 16 & 0 \\end{pmatrix} (mod17) \\equiv \\begin{pmatrix} 7 & 9 & 9 \\\\ 8 & 14 & 16 \\\\ 8 & 8 & 14 \\end{pmatrix} mod(17) \\\\
    &\\ A^8 \\equiv \\begin{pmatrix} 7 & 9 & 9 \\\\ 8 & 14 & 16 \\\\ 8 & 8 & 14 \\end{pmatrix} \\begin{pmatrix} 7 & 9 & 9 \\\\ 8 & 14 & 16 \\\\ 8 & 8 & 14 \\end{pmatrix} (mod17) \\equiv \\begin{pmatrix} 6 & 6 & 10 \\\\ 7 & 5 & 10 \\\\ 11 & 7 & 5 \\end{pmatrix} mod(17) \\\\
    &\\ A^{16} \\equiv \\begin{pmatrix} 6 & 6 & 10 \\\\ 7 & 5 & 10 \\\\ 11 & 7 & 5 \\end{pmatrix} \\begin{pmatrix} 6 & 6 & 10 \\\\ 7 & 5 & 10 \\\\ 11 & 7 & 5 \\end{pmatrix} (mod17) \\equiv \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} mod(17) \\\\
    \\\\
    &\\text{Thus, } A^{1785} \\equiv A^{16 \\cdot 111 + 9} \\equiv A^9 (mod17) \\text{ and } \\ A^{1985} \\equiv A^{16 \\cdot 124 + 1} \\equiv A (mod17). \\\\
    \\\\
    &\\text{Finally, we can calculate:} \\\\
    &\\lfloor c^{1788} \\rfloor \\equiv 3\\begin{pmatrix} 3 & 1 & 1 \\end{pmatrix} A^{1785} \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix} - 1 \\equiv 3\\begin{pmatrix} 3 & 1 & 1 \\end{pmatrix} A^9 \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix} - 1 \\ (mod17) \\\\ 
    &\\lfloor c^{1788} \\rfloor \\equiv 3\\begin{pmatrix} 3 & 1 & 1 \\end{pmatrix} \\begin{pmatrix} 6 & 6 & 10 \\\\ 7 & 5 & 10 \\\\ 11 & 7 & 5 \\end{pmatrix} \\begin{pmatrix} 3 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ -1 & 0 & 0 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix} - 1 = 476 \\equiv \\underline{ 0 \\ (mod17)} \\\\
    \\\\
    &\\lfloor c^{1988} \\rfloor \\equiv 3\\begin{pmatrix} 3 & 1 & 1 \\end{pmatrix} A^{1985} \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix} - 1 \\equiv 3\\begin{pmatrix} 3 & 1 & 1 \\end{pmatrix} A \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix} - 1 \\ (mod17) \\\\ 
    &\\lfloor c^{1988} \\rfloor \\equiv 3\\begin{pmatrix} 3 & 1 & 1 \\end{pmatrix} \\begin{pmatrix} 3 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ -1 & 0 & 0 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ 0 \\\\ -1 \\end{pmatrix} - 1 = 68 \\equiv \\underline{ 0 \\ (mod17)} \\quad \\blacksquare
    \\end{aligned}
    `
  },
  {
    id: '4',
    title: 'B2 Putnam 2018',
    category: 'Algebra',
    problem: `$\\text{For } n \\in \\mathbb{N} \\text{, let} \\ f_n(z) = n + (n-1)z + (n-2)z^2 + ... + z^{n-1}. \\\\ \\text{ Prove that } f_n \\text{ has no roots in the closed unit disk.}$`,
    solution:`
    \\begin{aligned}
    &\\text{Notice that } \\ f_n(z) = n + (n-1)z + (n-2)z^2 + ... + z^{n-1} = \\\\
    &\\quad\\ \\ 1 \\\\
    &\\ + 1 + z \\\\
    &\\ + 1 + z + z^2 \\\\
    &\\ ... \\\\
    &\\ + 1 + z + z^2 + ... + z^{n-1} \\\\
    &\\implies f_n(z) = \\frac{1 - z}{1 - z} + \\frac{1 - z^2}{1 - z} + \\frac{1 - z^3}{1 - z} + ... + \\frac{1 - z^n}{1 - z}, z \\neq 1 \\\\
    &\\implies f_n(z) = \\frac{(1 - z) + (1 - z^2) + (1 - z^3) + ... + (1 - z^n)}{1 - z} \\\\
    &\\implies f_n(z) = \\frac{n + 1 - (1 + z + z^2 + ... + z^n)}{1 - z} = \\frac{n + 1 - \\frac{1 - z^{n+1}}{1 - z}}{1 - z} \\\\
    &\\implies f_n(z) = \\frac{z^{n+1} - (n + 1)z + n}{(1 - z)^2}, \\text{ for } z \\neq 1 \\text{ and obviously } f_n(1) > 0\\\\
    \\\\
    &\\text{Thus, the roots of } f_n \\text{ are the roots of } p_n(z) = z^{n+1} - (n + 1)z + n \\text{, except the root 1.}\\\\
    &\\text{But z on the unit disk: } |z| \\leq 1 \\implies |z^n| \\leq 1 \\implies Re(z^n) \\leq 1 \\implies Re(1 - z^n) \\geq 0. \\\\
    &\\ p_n(z) = 0 \\implies  z^{n+1} - nz - z + n = 0 \\implies z(z^n - 1) = n(z - 1)\\implies \\\\
    &\\ n = z\\frac{1 - z^n}{1 - z} = z(1 + z + z^2 + ... + z^{n-1}) = z + z^2 + z^3 + ... + z^n \\implies \\\\
    &\\ (1 - z) + (1 - z^2) + (1 - z^3) + ... + (1 - z^n) = 0 \\implies \\\\
    &\\ Re(1 - z) + Re(1 - z^2) + Re(1 - z^3) + ... + Re(1 - z^n) = 0. \\\\
    &\\text{But, } Re(1 - z) \\geq 0, \\ ...\\ , Re(1 - z^n) \\geq 0 \\implies Re(1 - z) = ... = Re(1 - z^n) = 0 \\\\
    &\\implies Re(z) = 1, \\text{ with z on the unit disk} \\implies z = 1. \\\\
    &\\text{In conclution, 1 is the only root of } p_n \\text{ on the unit disk, but 1 is not a root of } f_n. \\\\
    &\\text{Thus, } f_n \\text{ has no roots on the unit disk} \\quad \\blacksquare
    \\end{aligned}
    `
  },
  {
    id: '5',
    title: 'A2 Putnam 2024',
    category: 'Algebra',
    problem: `$\\text{For which real polynomials p is there a real polynomial q such that:} \\\\ p(p(x)) - x = (p(x) - x)^2q(x), \\forall x \\in \\mathbb{R}$`,
    solution:`
    \\begin{aligned}
    &\\ (p(x) - x)^2 \\mid p(p(x)) - x = (p(p(x)) - p(x)) + (p(x) - x) \\\\
    &\\text{Set } P(x) = p(x) - x \\implies p(x) = P(x) + x \\\\
    &\\implies P^2(x) \\mid P(p(x)) + P(x) \\implies P(x)^2 \\mid P(P(x) + x) + P(x) \\\\
    \\\\
    &\\text{Let } P(x) = a_nx^n + ... + a_1x + a_0 \\implies \\\\
    &\\ P(P(x) + x) = a_n(P(x) + x)^n + ... + a_1(P(x) + x) + a_0 \\\\
    &\\ P(P(x) + x) = a_n((...)P^2(x) + nx^{n-1}P(x) + x^n) + ... + a_1(P(x) + x) + a_0 \\\\
    &\\ P(P(x) + x) \\equiv a_n(nx^{n-1}P(x) + x^n) + ... + a_1(P(x) + x) + a_0 \\ (modP^2(x)) \\\\
    &\\implies P(P(x) + x) \\equiv (na_nx^{n-1} + ... + a_1)P(x) + a_nx^n + ... + a_1x + a_0 \\ (modP^2(x)) \\\\
    &\\implies P(P(x) + x) \\equiv P'(x)P(x) + P(x) \\implies P'(x)P(x) + 2P(x) \\equiv 0 (modP^2(x)) \\\\
    &\\implies P^2(x) \\mid P'(x)P(x) + 2P(x) \\implies P(x) \\mid P'(x) + 2 \\\\ &\\implies P(x) = c \\text{ or } \\ P'(x) + 2 = 0 \\implies P(x) = c \\text{ or } \\ P(x) = c - 2x \\\\
    &\\implies \\underline{p(x) = \\pm x + c} \\quad \\blacksquare
    \\end{aligned}
    `
  },
  {
    id: '6',
    title: 'Ilinois Contest',
    category: 'Algebra',
    problem: `$\\text{Find all continuous functions } f:(-1,1) \\to (-1,1), \\text{ such that } f(0) = 1 \\text{ and} \\\\ f(x^2) = \\frac{f(x)}{1 + x}, \\forall x \\in (-1,1) $`,
    solution:`
    \\begin{aligned}
    &\\ f(x) = (1 + x)f(x^2) = (1 + x)(1 + x^2)f(x^4) = (1 + x)(1 + x^2)(1 + x^4)f(x^8) = ... \\\\
    &\\text{We will prove by induction that: } f(x) = f(x^{2^{n+1}})\\prod_{i=1}^{n} (1 + x^{2^i}), \\forall n \\in \\mathbb{N} \\\\
    &\\text{suppose } f(x) = f(x^{2^{n}})\\prod_{i=1}^{n-1} (1 + x^{2^i}) \\text{ and set } x \\to x^2 \\implies \\\\
    &\\ f(x^2) = f(x^{2^{n+1}})\\prod_{i=1}^{n-1} (1 + x^{2^{i+1}}) = f(x^{2^{n+1}})\\prod_{i=2}^{n} (1 + x^{2^i}) \\text{, but } f(x) = (1 + x)f(x^2) \\\\
    &\\ f(x) = (1 + x)f(x^{2^{n+1}})\\prod_{i=2}^{n} (1 + x^{2^i}) = f(x^{2^{n+1}})\\prod_{i=1}^{n} (1 + x^{2^i}) \\quad \\blacksquare
    \\\\
    &\\text{Thus, } f(x) = \\lim_{n \\to \\infty} f(x^{2^{n+1}})\\prod_{i=1}^{n} (1 + x^{2^i}) = \\lim_{n \\to \\infty}f(x^{2^{n+1}})\\lim_{n \\to \\infty} \\prod_{i=1}^{n} (1 + x^{2^i}). \\\\
    &\\text{Given that f is continuous } \\lim_{n \\to \\infty} f(x^{2^{n+1}}) = f( \\lim_{n \\to \\infty} (x^{2^{n+1}})) = f(0) = 1, \\text{ we can } \\\\
    &\\text{compute } f(x) = \\prod_{n=1}^{\\infty} (1 + x^{2^n}) = \\sum_{n=0}^{\\infty} x^n = \\frac{1}{1 - x} \\quad \\blacksquare
    \\end{aligned}
    `
  },
  {
    id: '7',
    title: 'N2 IMO Shortlist 2022',
    category: 'Number Theory',
    problem: `$\\text{Find all positive integers } n > 2 \\text{ such that } n! \\mid \\prod_{p<q \\leq n} (p + q) \\\\ \\text{Where p, q are primes.}$`,
    solution:`
    \\begin{aligned}
    &\\text{Let's assume that } p_1 < p_2 < ... < p_m \\leq n \\text{ are the primes less than or equal to n.} \\\\
    \\\\
    &\\underline{\\text{claim 1:}} \\ p_m = p_{m-1} + 2 \\\\
    &\\underline{\\text{proof:}} \\\\
    &\\ p_m \\mid n! \\implies \\ p_m \\mid \\prod_{p<q \\leq n} (p + q) \\implies \\ p_m \\mid p_i + p_j \\text{ for some } i, j < m \\\\
    &\\text{Suppose for the sake of contradiction that neither } p_i \\text{ nor } p_j \\text{ is } 2. \\\\
    &\\text{Then, both } p_i \\text{ and } p_j \\text{ are odd primes } \\implies p_i + p_j \\text{ is even and } p_m \\text{ is odd } \\\\
    &\\implies 2p_m \\mid p_i + p_j \\implies 2p_m \\leq p_i + p_j < 2p_{m-1} < 2p_m \\text{, contradiction.} \\\\
    \\\\
    &\\text{Thus, one of } p_i \\text{ or } p_j \\text{ is } 2. \\text{ Without loss of generality, let } p_j = 2 \\implies \\\\ 
    &\\ p_m \\mid p_i + 2 \\implies p_m \\leq p_i + 2 \\leq p_{m-1} + 2 \\implies p_m = p_{m-1} + 2 \\text{ or } p_m = p_{m-1} + 1 \\\\
    \\\\
    &\\text{But if } p_m = p_{m-1} + 1 \\text{ then } p_m = 3 \\text{, beacause 2 and 3 are the only consecutive primes} \\\\ &\\implies n \\in \\{3, 4\\}.
    \\text{ Checking both cases, we find that neither work.} \\\\ &\\text{Thus, } p_m = p_{m-1} + 2 . \\\\
    \\\\
    &\\underline{\\text{claim 2:}} \\ p_{m-1} = p_{m-2} + 2 \\\\
    &\\underline{\\text{proof:}} \\\\
    &\\ p_{m-1} \\mid n! \\implies \\ p_{m-1} \\mid \\prod_{p<q \\leq p_m} (p + q) \\implies \\ p_{m-1} \\mid \\prod_{p<q \\leq p_{m-1}} (p + q) \\cdot \\prod_{i=1}^{m-1} (p_i + p_m) \\\\
    &\\text{Case 1: } p_{m-1} \\mid \\prod_{p<q \\leq p_{m-1}} (p + q) \\implies \\text{ by the same reasoning as in claim 1, } \\\\ &\\text{ we find that } p_{m-1} = p_{m-2} + 2. \\\\
    \\\\
    &\\text{Case 2: } p_{m-1} \\mid \\prod_{i=1}^{m-1} (p_i + p_m) \\implies \\ p_{m-1} \\mid \\prod_{i=1}^{m-1} (p_i + p_{m-1} + 2) \\implies p_{m-1} \\mid \\prod_{i=1}^{m-1} (p_i + 2) \\\\
    &\\text{Thus, for some } i < m-1, \\ p_{m-1} \\mid p_i + 2 \\implies p_{m-1} \\leq p_i + 2 \\leq p_{m-2} + 2 \\implies \\\\ &\\ p_{m-1} = p_{m-2} + 2. \\text{ We have excluded } p_{m-1} = p_{m-2} + 1 \\text{ due to prior reasoning.} \\\\
    \\\\
    &\\underline{\\text{Conclusion:}} \\\\
    &\\text{We have created a set of three consecutive twins primes } \\{p_{m-2}, p_{m-1}, p_m\\} \\\\
    &\\text{However, the only such set is } \\{3, 5, 7 \\} \\implies p_m = 7 \\implies n \\in \\{7, 8, 9, 10 \\}. \\\\
    &\\text{Checking those four values, we find that only } n = 7 \\text{ works.} \\quad \\blacksquare
    \\end{aligned}
    `
  },
  {
    id: '8',
    title: 'Problem 6 IMC 2024',
    category: "Combinatorics",
    problem: `$\\text{Prove that for any function } f: \\mathbb{Q} \\to \\mathbb{Z}, \\text{ there exists } a, b, c \\in \\mathbb{Q} \\text{ such that } \\\\ \\text{for } a<b<c, \\ f(a) \\leq f(b) \\text{ and } f(c) \\leq f(b)$`,
    solution: `
    \\begin{aligned}
    &\\text{Suppose there exists a function } f \\text{ such that } f(y) < max(f(x), f(z)), \\ \\forall x<y<z \\\\
    \\\\
    &\\underline{\\text{claim:}} \\ f \\text{ is eventually strictly monotonic} \\\\
    &\\underline{\\text{proof:}} \\\\
    &\\text{Case 1: f is strictly decreasing.} \\\\
    &\\text{Case 2: f is not strictly decreasing. Then, } \\exists a,b \\text{ such that } a<b \\text{ and } f(a) \\leq f(b). \\\\
    &\\text{Take any rational } x > b > a \\implies f(b) < max(f(a), f(x)) \\implies f(b) < f(x). \\\\
    &\\text{Now take any rational } y > x > b \\implies f(x) < max(f(b), f(y)) \\implies f(x) < f(y). \\\\
    &\\text{We proved that } \\forall x, y \\in \\mathbb{Q} : \\ b < x < y \\implies f(x) < f(y) \\\\
    &\\text{Thus, f is strictly increasing after a rational number b}. \\\\
    \\\\
    &\\underline{\\text{Contradiction}} \\\\
    &\\text{Without loss of generality suppose that f is increasing after a point } b \\in \\mathbb{Q}. \\\\
    &\\text{Consider the increasing sequence } q_m = b + \\frac{m}{n} > b, \\text{ for arbitrarily chosen n.} \\\\
    &\\ f(q_m) > f(q_{m-1}) \\text{ and } f(q_m), f(q_{m-1}) \\in \\mathbb{Z} \\implies f(q_m) \\geq f(q_{m-1}) + 1 \\implies \\\\
    &\\ f(q_n) \\geq n + f(q_0) \\implies f(b + 1) \\geq n + f(b) \\implies n \\leq f(b + 1) - f(b). \\\\
    &\\text{Notice that we choosed n arbitrarily from } \\mathbb{N}. \\text{ Thus, the natural number are bounded} \\\\
    &\\text{above by some integer } f(b + 1) - f(b). \\text{ This is clearly a contradiction} \\quad \\blacksquare
    \\end{aligned}
    `
  },
  {
    id: `9`,
    title: 'Problem 7 IMC 2025',
    category: 'Number Theory',
    problem: '$\\text{Find all nonempty sets } M \\subseteq \\mathbb{N^*} \\text{ satisfying the following properties:} \\\\ \\text{i) } x \\in M \\implies 2x \\in M  \\\\ \\text{ii) } x, y \\in M \\text{ and } 2 \\mid x + y \\implies \\frac{x + y}{2} \\in M $',
    solution: `
    \\begin{aligned}
    &\\underline{\\text{claim 1:}} \\ x \\in M \\implies nx \\in M, \\ \\forall n \\in \\mathbb{N^*} \\\\
    &\\underline{\\text{proof:}} \\text{ By (strong) induction on the length of the binary representation of n} \\\\ \\\\
    &\\text{Base case: If the length of the binary represention of n is 1 then } n = 1. \\\\ &\\text{But we know that } x \\in M \\text{ due to our assumption}. \\\\
    \\\\
    &\\text{Inductive step: } \\\\ 
    &\\text{Take the binary represention of 2n: } 2n = 2^k + 2^l + ... + 2^t, \\text{ where } k>l>...>t \\\\
    &\\text{If the length is L then the length of } 2^k \\text{ is 1 and the length of } 2^l + ... + 2^t \\text { is } L-1. \\\\
    &\\text{Thus, } 2^kx \\in M \\text{ and } (2^l + ... + 2^t)x \\in M \\implies (2^k + 2^l + ... + 2^t)x \\in M \\implies \\\\
    &\\frac{2n}{2}x \\in M \\implies nx \\in M \\\\
    \\\\
    &\\underline{\\text{Definition:}} \\text{ For an element } x \\in M, \\ \\ <x> = \\{ nx \\mid n \\in \\mathbb{N^*} \\} \\\\
    &\\underline{\\text{Definition:}} \\text{ Define } d(M) \\text{ to be the smallest subset for which: } M = \\bigcup_{x \\in d(M)} <x> \\\\
    \\\\
    &\\text{Take } d = gcd(d(M)), \\text{ the gcd of all the elements in } d(M). \\\\
    &\\text{Now take any element of } x \\in d(M). \\text{ We know } d \\mid x \\text{, thus any multiple of x is also} \\\\
    &\\text{multiple of d} \\implies <d> \\subseteq <x>.\\\\
    \\\\
    &\\ M = \\bigcup_{x \\in d(M)} <x> \\ \\subseteq \\ <d> \\text{. Thus M contains only multiples of d.} \\\\
    \\\\
    &\\underline{\\text{claim 2:}} \\ d \\text{ is odd} \\\\
    &\\underline{\\text{proof:}} \\text{ Suppose d is even.} \\\\
    &\\text{Then every number in M is divisible by an even number, thus M contains only } \\\\
    &\\text{even numbers. If so, then there must be an } x \\in M \\text{ for which } v_2(x) \\geq 1 \\text{ in minimum.}\\\\
    &\\text{In addition } 2x \\in M \\implies y = \\frac{x + 2x}{2} = \\frac{3x}{2} \\in M \\implies v_2(y) < v_2(x). \\\\
    &\\text{This is a contadiction since we assumed } v_2(x) \\text{ to be minimum.} \\\\
    \\\\
    &\\underline{\\text{claim 3:}} \\text{ Two consecutive elements in M differ by } d \\\\
    &\\underline{\\text{proof:}} \\text{ There are } a, b \\in M \\text{ so that } gcd(a, b) = d \\text{, else } d \\text{ would not be greatest divisor.} \\\\
    &\\text{Bezout's theorem implies that } \\exists x, y \\text{ so that } |ax - by| = gcd(a, b) = d \\\\
    &\\text{But } a, b \\in M \\text{ and } ax \\in <a>, \\ by \\in <b> \\implies ax, by \\in M \\text{ and }\\ ax, by \\text{ differ by d}.\\\\
    &\\text{These are consecutive because all elements of M are divisible d, so d is the minimum} \\\\
    &\\text{diffrence between terms in M.} \\\\
    \\\\
    &\\underline{\\text{Conclution:}} \\\\
    &\\text{Take the consecutive elements of diffrence d to be } L, L + d. \\\\
    &\\text{Take N to be the next greater element of } L + d \\text{ in M, and notice how L and L + d} \\\\
    &\\text{must have diffrent parities (due to d being odd). The average of any integer and} \\\\
    &\\text{one of L, L + d is also an integer. Starting from N the average with either L or L+ d} \\\\
    &\\text{is inside M and greater than L. In addition, since L and L + d are consecutive the } \\\\
    &\\text{average shall be greater or equal to L + d (there can't be an element in M between} \\\\
    &\\text{L and L + d).} \\\\
    \\\\
    &\\text{For the sake of contradiction, suppose the average is not equal to L + d.} \\\\
    &\\text{We can compute the average of the already computed average in M} \\\\
    &\\text{and either L or L + d and so on. This produces a strictly decreasing} \\\\
    &\\text{bounded sequence of natural numbers. This is a contradiction (infinite decent).}  \\\\
    &\\text{Thus the average of L and N was equal to L + d} \\implies N = L + 2d \\\\
    &\\text{the following patterns emerges:} \\\\
    &\\ L, L + d \\in M \\implies L + d, L + 2d \\in M \\implies L + 2d, L + 3d \\in M \\implies ... \\\\
    &\\text{Thus, all the multiples of d greater than L are in M}. \\\\
    &\\ M = \\{ m \\in <d> \\mid m \\geq L \\} \\text{ for some } L, d \\in N \\text{ and } d \\text{ odd.} \\\\
    &\\text{It is easy to verify that any set of this form satisfies the properties i) and ii).} \\quad \\blacksquare
    \\end{aligned}
    `
  }
];

export default function Problems() {
  const [expandedProblem, setExpandedProblem] = useState(null);
  const [showSolution, setShowSolution] = useState({});

  const toggleSolution = (id) => {
    setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper function to detect and render LaTeX
  const renderMathOrText = (content) => {
    if (content.startsWith('$') && content.endsWith('$')) {
      return <LatexRenderer content={content.slice(1, -1)} inline />;
    }
    return content;
  };

  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Problem Collection</h1>
        <p className="text-xl text-gray-600">Competition Math Problems</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {problems.map((problem, index) => (
          <div key={problem.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedProblem(expandedProblem === index ? null : index)}
              className="w-full p-4 bg-gray-50 hover:bg-gray-100 text-left flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">
                  {problem.title}
                </h2>
                <div className="mt-1">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                    {problem.category}
                  </span>
                </div>
              </div>
              <span className="text-gray-500">
                {expandedProblem === index ? '▲' : '▼'}
              </span>
            </button>

            {expandedProblem === index && (
              <div className="p-6 bg-white space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Problem Statement:</h3>
                  <div className="text-lg">
  {Array.isArray(problem.problem)
    ? problem.problem.map((part, i) => renderMathOrText(part, i))
    : renderMathOrText(problem.problem)
  }
</div>
                </div>

                <div>
                  <button
                    onClick={() => toggleSolution(problem.id)}
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    {showSolution[problem.id] ? 'Hide Solution' : 'Show Solution'}
                  </button>
                  {showSolution[problem.id] && (
                    <div className="mt-2 pl-4 border-l-2 border-green-200">
                      <h4 className="font-semibold mb-2">Solution:</h4>
                      <LatexRenderer content={problem.solution} block className="overflow-x-auto" />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}