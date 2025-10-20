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
      &\\text{Consider the first (and only) time } L \\text{ appears } \\ L \\text{ times in the sequence.} \\\\
      &\\text{After the L-th appearance of L, by definition, L appears again.} \\\\
      &\\text{Notice that the L numbers before each appearance of L must be less than L.} \\\\
      &\\text{That is, because they can't be equal to L (the L-th appearance of L is unique) and } \\\\
      &\\text{if there was some k greater than L so that (k, L) appears, it would suggest that k} \\\\
      &\\text{appeared L times. But for each appearance of k>L there must be an appearance of L} \\\\
      &\\text{since for a number to appear more than L times it must first appear L times.} \\\\
      &\\text{This is a contradiction, since these appearances of L are at least L in multitude, but} \\\\ &\\text{prior to the appearance of (L, L).} \\\\
      &\\text{Thus, we have L numbers less than L. By the Pigeonhole Principle, at least two} \\\\
      &\\text{of them must be equal. But this means that a number appears in the sequence for} \\\\ &\\text{the L-th time twice, which is clearly a contradiction.} \\\\
      \\\\
      \\\\
      &\\underline{\\text{Conclusion:}} \\\\
      \\\\
      &\\text{Lemma 3 suggests that there are only finitely many numbers that appear infinitely} \\\\
      &\\text{many times in the sequence. Consider the finite set } S \\text{ of these numbers.} \\\\
      &\\text{Eventually, only one of the sequences } a_1, a_3, a_5, \\ldots \\text{ or } a_2, a_4, a_6, \\ldots \\text{ will contain} \\\\
      &\\text{numbers in } S. \\text{ This is because the number of appearances of a number in } \\ S \\\\
      &\\text{gets indefinitely big (surpassing L)} \\implies\\ a_n \\in S \\implies\\ a_{n+1} \\notin S \\implies\\ a_{n+2} \\in S. \\\\
      &\\text{Thus, } \\ a_n, a_{n+2}, a_{n+4}, \\ldots \\in S \\text{, for large enouph values of n.} \\\\
      &\\text{We can also notice that the sequence above only depends on whether the terms: } \\\\
      &\\ a_{n+1}, a_{n+3}, a_{n+5}, \\ldots \\text{, increase. So only the differences of those terms effect the } \\\\ &\\text{ the bounded sub-sequence. We can prove that those differences are bounded.} \\\\
      &\\text{However, since both the values of the bounded sub-sequence and the differences on } \\\\ &\\text{the unbounded sub-sequence are finite, their combinations are also finite.} \\\\
      &\\text{Thus, those combinations eventually repeat and the sequence will re-visit states.} \\\\
      &\\text{In Conclution, } a_n, a_{n+2}, a_{n+4}, \\ldots \\text{ is periodic for large enouph values of n.} \\quad \\blacksquare
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