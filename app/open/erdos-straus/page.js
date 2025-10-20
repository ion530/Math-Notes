'use client';

import { useState } from 'react';
import LatexRenderer from '../../../components/LatexRenderer';

const propositions = [
  {
    title: "Valuation Symmetry",
    claim: `$\\text{For any solution } \\ (x, y, z) \\text{ and any prime } \\ q, \\text{ at least two of } \\ v_q(x), v_q(y), v_q(z) \\text{ are equal.}$`,
    proof: `
    \\begin{aligned}
    &\\text{Let q be a prime such that } \\ v_q(x), v_q(y), v_q(z) \\text{ are distinct.} \\\\
    &\\text{Assume without loss of generality that } v_q(x) > v_q(y) > v_q(z) \\\\
    &\\implies\\ v_q(xy) > v_q(xz) > v_q(yz) \\implies\\ v_q(xy + xz + yz) = v_q(yz) = v_q(y) + v_q(z) \\\\
    \\\\
    &\\text{But } v_q(4xyz) = v_q(p(xy + xz + yz)) = v_q(p) + v_q(xy + xz + yz) \\leq 1 + v_q(y) + v_q(z) \\\\ 
    &\\text{And } \\ v_q(4xyz) = v_q(4) + v_q(x) + v_q(y) + v_q(z) \\geq v_q(x) + v_q(y) + v_q(z) \\\\
    &\\text{Thus, } v_q(x) + v_q(y) + v_q(z) \\leq 1 + v_q(y) + v_q(z) \\\\
    &\\implies\\ v_q(x) \\leq 1 \\implies\\ v_q(y) \\leq 0 \\implies\\ v_q(z) < 0. \\\\ 
    &\\text{This is a contradiction since the valuation function takes non-negative values.} \\quad \\blacksquare
    \\end{aligned}
    `
  },
  {
    title: "Alternative Formulation",
    claim: `$4xyz = p(xy + xz + yz) \\iff (4x - p)(4y - p)(4z - p) = p^2(4x + 4y + 4z - p)$`,
    proof: `
    \\begin{aligned}
    &\\text{Starting from } 4xyz = p(xy + xz + yz) \\\\
    &\\text{Expand the right hand side of the equivalence: } (4x - p)(4y - p)(4z - p) \\\\
    &\\ = 64xyz - 16p(xy + xz + yz) + 4p^2(x + y + z) - p^3 = 16[4xyz - p(xy + xz + yz)] + 4p^2(x + y + z) - p^3 \\\\
    \\\\
    &\\text{Substituting } 4xyz - p(xy + xz + yz) = 0 \\text{ into the equation, we have: } \\\\
    &\\ (4x - p)(4y - p)(4z - p) = 4p^2(x + y + z) - p^3 = p^2(4x + 4y + 4z - p). \\quad \\blacksquare \\\\
    \\end{aligned}
    `
  },
  {
    title: "Bounds Of Solutions",
    claim: `
    \\begin{aligned}
    &\\ min(x,y,z) < \\frac{2p}{3} \\\\ \\\\ &\\ max(x,y,z) \\geq p \\\\ \\\\ &\\ mid(x,y,z) > \\frac{p}{2}
    \\end{aligned}`,
    proof: `
    \\begin{aligned}
    &\\underline{\\text{Upper Bound:}} \\ min(x,y,z) < \\frac{2p}{3} \\\\
    &\\text{Notice that } \\ p \\mid 4xyz \\implies\\text{for } \\ p \\neq 2, \\text{ without loss of generality } \\ p \\mid x. \\\\
    &\\text{Thus } \\ x = wp \\implies\\ 4zywp = p(ywp + zwp + yz) \\implies\\ 4zyw = wp(y + z) + yz \\implies\\ yz(4w - 1) = wp(y + z). \\\\
    &\\text{However, } \\ 4w - 1 \\geq 3w, \\forall w \\in \\mathbb{N} \\implies\\ wp(y + z) \\geq 3wyz \\implies\\ p(y + z) \\geq 3yz \\\\
    &\\implies\\ 3yz - py - pz \\leq 0 \\implies\\ 3yz - py - pz + \\frac{p^2}{3} \\leq \\frac{p^2}{3} \\implies\\ 3(y - \\frac{p}{3})(z - \\frac{p}{3}) \\leq \\frac{p^2}{3} \\\\
    &\\implies\\ (y - \\frac{p}{3})(z - \\frac{p}{3}) \\leq (\\frac{p}{3})^2 \\implies\\ y - \\frac{p}{3} \\leq \\frac{p}{3} \\text{ or } \\ z - \\frac{p}{3} \\leq \\frac{p}{3} \\implies\\ min(y,z) \\leq \\frac{2p}{3}. \\\\
    &\\text{If } \\ p \\neq 3 \\text{ then } \\ min(x,y,z) < \\frac{2p}{3}. \\quad \\blacksquare
    \\\\
    \\\\
    &\\underline{\\text{Lower Bound:}} \\ max(x,y,z) \\geq p \\\\
    &\\ p \\mid 4xyz \\implies\\text{ without loss of generality } \\ p \\mid x \\implies\\ x \\geq p \\implies\\ max(x,y,z) \\geq p. \\quad \\blacksquare
    \\\\
    \\\\
    &\\underline{\\text{Intermediate Lower Bound:}} \\ mid(x,y,z) > \\frac{p}{2} \\\\
    &\\text{Assume without loss of generality that } z \\leq y \\leq x \\\\
    &\\text{If } 4y - p \\leq p \\text{ and } 4z - p \\leq p \\text{ and } 4x - p < 4x + 4y + 4z - p \\\\
    &\\text{Then, by multipling the inequalities above } (4x - p)(4y - p)(4z - p) < p^2(4x + 4y + 4z - p), \\text{ contradiction.} \\\\
    &\\text{Thus, } 4y - p > p \\text{ or } 4z - p > p \\text{ or } 4x - p \\geq 4x + 4y + 4z - p \\\\
    &\\text{But, if } 4x - p \\geq 4x + 4y + 4z - p \\implies 4x + 4y \\leq 0 \\implies x + y \\leq 0, \\text{ but } x, y > 0. \\\\
    &\\text{Therefore, } 4y - p > p \\text{ or } 4z - p > p \\implies\\ y > \\frac{p}{2} \\text{ or } z > \\frac{p}{2} \\implies\\ max(y,z) > \\frac{p}{2} \\implies\\ mid(x,y,z) > \\frac{p}{2}. \\quad \\blacksquare
    \\end{aligned}
    `
  },
  {
    title: "Equivalante Form Of The Conjecture",
    claim: `
    \\begin{aligned}
    &\\text{The theorem is equivalent to the existence (for every p) of positive integers } n, m \\text{ such that: } \\\\ &\\ 4nm - mp - 1 \\mid 4n^2 \\text{ and } 4 \\mid mp + 1 \\\\
    \\end{aligned}`,
    proof: `
    \\begin{aligned}
    &\\text{Starting from } 4/p = 1/x + 1/y + 1/z \\implies\\ 4xyz = p(xy + xz + yz) \\\\
    &\\text{Assume without loss of generality that } \\ p \\mid x \\implies\\ x = x'p \\text{ for some } x' \\in \\mathbb{N} \\implies x' = \\frac{x}{p} \\\\
    &\\text{Now take } z = min(x,y,z) \\implies\\ z \\leq \\frac{2p}{3} < p \\implies\\ p \\nmid z \\implies\\ gcd(p,z) = 1 \\\\
    &\\text{Thus } z \\mid pxy \\implies\\ z \\mid p^2x'y \\implies\\ z \\mid x'y \\implies\\ zz' = x'y \\text{ for some } z' \\in \\mathbb{N} \\implies z' = \\frac{x'y}{z} \\\\
    &\\text{Substituting back, we have } 4px'yz = p^2z'z + p^2 x'z + p y z  \\implies 4x'y = pz' + p x' + y \\implies p \\mid y(4x' - 1) \\\\
    \\\\
    &\\underline{\\text{Case 1:}} \\ p \\mid y \\\\
    &\\text{Then } y = y'p \\text{ for some } y' \\in \\mathbb{N} \\implies 4x'y'p = pz' + p x' + p y' \\implies 4x'y' = z' + x' + y', \\text{ with } z' \\mid x'y' \\\\
    &\\text{Notice how the equation is invarient under p in this case. Thus, finding a solution } (x', y', z') \\text{ reveals the general} \\\\
    &\\text{solution } (x, y, z) = (px', py', p\\frac{x'y'}{z'}) \\text{ for any prime } p. \\text{ Equivalantely, we ask whether there are x', y' so that: } \\\\
    &\\ 4x'y' - x' - y' \\mid x'y' \\implies\\ 4x'y' - x' - y' \\leq x'y' \\implies\\ 3x'y' - x' - y' \\leq 0 \\implies \\ (3x' - 1)(3y' - 1) \\leq 1 \\\\
    &\\text{Without loss of generality, } 3x' - 1 \\leq 1 \\implies\\ x' \\leq \\frac{2}{3} \\implies\\ x' < 1, \\text{ which contradicts x' being natural.} \\\\
    &\\text{Thus, there are no solutions in this case.} \\\\
    \\\\
    &\\underline{\\text{Case 2:}} \\ p \\nmid y \\implies p \\mid 4x' - 1 \\\\
    &\\text{Then } 4x' - 1 = mp \\text{ for some } m \\in \\mathbb{N} \\text{ and set } y = n. \\text{ Thus } x' = \\frac{mp + 1}{4}. \\\\
    &\\text{Substituting back, we have } (4x' - 1)n = p(z' + x') \\implies m p n = p(z' + \\frac{mp + 1}{4}) \\implies 4 m n - m p - 1 = 4 z'. \\\\
    &\\text{But, we have the constraint } z' \\mid x'y' \\implies z' \\mid \\frac{mp + 1}{4} n \\implies 4 z' \\mid n(mp + 1) \\implies \\\\
    &\\ 4 m n - m p - 1 \\mid n(mp + 1) \\implies 4 m n - m p - 1 \\mid n(mp + 1) - (4 m n - m p - 1)n = 4 n^2 m. \\\\
    &\\text{With, } gcd(m, 4 m n - m p - 1) = gcd(m, 4 m n - m p - 1 - (4 n - p)m) = gcd(m, 1) = 1. \\\\
    \\\\
    &\\text{In Conclusion, } 4 m n - m p - 1 \\mid 4 n^2 \\text{ and } 4 \\mid mp + 1. \\text{ We can see substituting: } \\\\
    & x = p \\frac{mp + 1}{4}, y = n, z = \\frac{n(mp + 1)}{4 m n - m p - 1} \\text{ gives a solution to the original equation.} \\quad \\blacksquare
    \\end{aligned}
    ` 
  },
  {
    title: "Primes Of The Form 4n - 1",
    claim: `
    \\begin{aligned}
    &\\text{The conjecture holds for primes of the form } \\ 4n - 1, \\ n \\in \\mathbb{N} \\\\
    \\end{aligned}`,
    proof: `
    \\begin{aligned}
    &\\text{Let } p = 4n - 1 \\text{ for some } n \\in \\mathbb{N}. \\\\
    &\\text{Choose } m = 4n + 1 \\text{ and notice } 4 \\mid mp + 1 \\text{ since } mp + 1 = (4n + 1)(4n - 1) + 1 = 16n^2 - 1 + 1 = 16n^2. \\\\
    &\\text{Now, } 4 m n - m p - 1 = 4(4n + 1)n - (4n + 1)(4n - 1) - 1 = 16n^2 + 4n - (16n^2 - 1) - 1 = 4n \\mid 4 n^2. \\\\
    &\\text{Thus, the conditions of the previous proposition are satisfied, and the Theorem holds in this case.}  \\quad \\blacksquare
    \\end{aligned}`
    }
];

export default function ErdosStraus() {
  const [expandedProp, setExpandedProp] = useState(null);

  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Erdős–Straus Conjecture</h1>
          <p className="text-xl text-gray-600">A Diophantine problem in number theory</p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Conjecture Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Conjecture</h2>
            <p className="mb-4">
              For every integer <span className="font-math italic">n ≥ 2</span>, the equation
            </p>
            <div className="text-center my-4">
              <span className="text-2xl font-math">4/n = 1/x + 1/y + 1/z</span>
            </div>
            <p>
              has a solution in positive integers <span className="font-math">x, y, z</span>.
            </p>
          </div>

          {/* Historical Context */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Historical Context</h2>
            <p className="mb-4">
              First proposed by Paul Erdős and Ernst G. Straus around 1948, this conjecture belongs to the family of Egyptian fraction problems.
            </p>
            <p>
              While verified computationally for <span className="font-math">n ≤ 10<sup>17</sup></span>, the general case remains unproven.
            </p>
          </div>

          {/* Reduction Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reduction to Prime Denominators</h2>
            <p className="mb-4">
              The conjecture can be reduced to considering only prime denominators <span className="font-math">n = p</span>:
            </p>
            <div className="mb-4 pl-4 border-l-4 border-blue-200">
              <p className="font-math italic mb-2">
                If 4/p has a solution for all primes p, then 4/n has a solution for all composite n.
              </p>
            </div>
            <div className="text-center my-3">
              <span className="font-math text-lg">
                If 4/p = 1/a + 1/b + 1/c, then 4/(p⋅m) = 1/(a⋅m) + 1/(b⋅m) + 1/(c⋅m).
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800"> Alternative Form </h2>
            <p className="mb-4">
              The equation can also be expressed as: 
            </p>
            <div className="text-center my-3">
              <span className="font-math text-lg">
                4xyz = p(xy + xz + yz)
              </span>
            </div>
            <p>
              This form highlights the symmetry in the variables and allows for various algebraic manipulations.
            </p>
          </div>

           {/* Personal Propositions - Visually Distinct Section */}
          <div className="mt-16 p-1 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg">
            <div className="bg-white p-6 rounded-lg border-2 border-indigo-100">
              <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">
                Results and Propositions (Personal Contributions)
              </h2>

              {propositions.map((prop, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <button
                    className="w-full text-left py-3 px-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg
                              border-l-4 border-indigo-400 flex justify-between items-center transition-all"
                    onClick={() => setExpandedProp(expandedProp === index ? null : index)}
                  >
                    <h3 className="text-xl font-bold text-indigo-700">
                      Proposition {index + 1}: {prop.title}
                    </h3>
                    <span className="text-indigo-500 text-lg font-mono">
                      {expandedProp === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  {expandedProp === index && (
                    <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Claim:</h4>
                        <LatexRenderer content={prop.claim.replace(/^\$|\$/g, '')} block />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Proof:</h4>
                        <LatexRenderer content={prop.proof} block className="overflow-x-auto" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}