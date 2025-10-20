'use client';

import { useState } from 'react';
import LatexRenderer from '../../components/LatexRenderer';

const proofs = [
  {
    id: '1',
    title: `The Sole Number Divisible by All Primes Up to Itself`,
    claim: `$2 \\text{ is the only number divisible by all the primes less or equal to itself.}$`,
    proof: `
    \\begin{aligned}
    &\\text{Let } X > 2 \\text{ such that} \\ p\\mid X, \\text{ }\\forall \\text{prime p}\\leq X. \\\\
    \\\\
    &\\text{Claim: } \\forall y \\in [X,X^2], \\ y \\text{ is prime } \\iff y \\equiv 1 \\ (\\mathrm{mod}\\ X). \\\\
    &\\text{Proof of Claim:} \\\\
    &\\quad (\\Rightarrow) \\text{ Let } y \\text{ be prime. Suppose } y \\not\\equiv 1 \\ (\\mathrm{mod}\\ X). \\\\
    &\\quad\\quad \\text{Then } y = kX + r \\text{ where } 2 \\leq r \\leq X. \\\\
    &\\quad\\quad \\exists \\text{prime p} \\leq r<y \\text{ dividing } r \\text{ (since } r \\geq 2). \\\\
    &\\quad\\quad p \\mid X \\text{ (by definition of X) and } p \\mid r \\implies p \\mid y, \\text{(with } p \\not= y) \\text{ contradicting } y \\text{ being prime.} \\\\
    \\\\
    &\\quad (\\Leftarrow) \\text{ Strong induction on } k \\text{ for } y = kX + 1: \\\\
    &\\quad\\quad \\text{Base Case } (k=1): y = X+1 \\text{ and suppose X + 1 is composite. } \\\\
    &\\quad\\quad \\text{Then } \\exists \\text{prime} \\ p \\ < X+1 \\text{ so that } \\ p \\mid X+1. \\\\
    &\\quad\\quad \\text{So } \\ p \\leq X \\implies p \\mid X \\text{ and } \\ p \\mid X + 1 \\implies p \\mid 1, \\text{ contradiction.} \\\\
    \\\\
    &\\quad\\quad \\text{Inductive Step: Assume that } \\forall k' \\leq k \\text{ it follows that } \\ k'X+1 \\text{ is prime.} \\\\
    &\\quad\\quad \\text{Assume } y = (k+1)X+1 \\text{ is composite and let } p \\text{ be its smallest prime factor.} \\\\
    &\\quad\\quad \\text{Case 1: } p \\leq X \\implies p \\mid X \\text{ and } \\ p \\mid (k+1)X + 1 \\implies p \\mid 1, \\text{ contradiction.} \\\\
    &\\quad\\quad \\text{Case 2: } p > X \\implies p = k'X+1 \\text{ for some } k' \\leq k \\text{ (already proved).} \\\\
    &\\quad\\quad p \\mid y \\implies p \\mid (k'X + 1) + (k - k' + 1)X \\implies p \\mid p + (k - k' + 1)X \\implies p \\mid (k - k' + 1)X \\implies p \\mid k - k' + 1 \\text{ (since } p \\nmid X). \\\\
    &\\quad\\quad \\text{But } X < p \\leq k - k' + 1 < k + 1 \\implies X^2 < X(k+1) = y - 1 < X^2, \\text{ contradiction.} \\\\
    \\\\
    &\\text{Final Step: Take } k = X-2: \\\\
    &\\quad y = (X-2)X + 1 = X^2 - 2X + 1 = (X-1)^2 \\text{ must be prime (due to the previous claim).} \\\\
    &\\quad \\text{But perfect squares are never prime.} \\quad \\blacksquare
    \\end{aligned}
  `
  },
  // A wrong proof :(
  /*,
  {
    id: '2',
    title: `$\\int_0^{\\infty}\\ |\\frac{\\sin t}{t}| \\, dt\\ = \\infty$`,
    claim: `$\\text{The integral } \\int_0^{\\infty} \\frac{|\\sin t|}{t} \\, dt\\text{ diverges.}$`,
    steps: [
      {content:`
        \\begin{aligned}
        &\\quad\\text{Let } \\ I = \\int_0^{\\infty} \\frac{|\\sin t|}{t} \\, dt = \\sum_{k=0}^{\\infty} \\int_{k\\pi}^{(k+1)\\pi} \\frac{|\\sin t|}{t} \\, dt = \\sum_{k=0}^{\\infty} \\ I_k \\\\
        \\\\
        &\\underline{\\text{Lower Bound For } \\ I_k:} \\\\
        &\\ I_k = \\int_{k\\pi}^{(k+1)\\pi} \\frac{|\\sin t|}{t} \\, dt = \\int_{0}^{k\\pi + ε} \\frac{|\\sin t|}{t} \\, dt \\ + \\int_{k\\pi + ε}^{(k+1)\\pi - ε} \\frac{|\\sin t|}{t} \\, dt \\ + \\int_{(k+1)\\pi - ε}^{(k+1)\\pi} \\frac{|\\sin t|}{t} \\, dt,  \\forall ε\\ 0 < ε < \\pi/2 \\\\
        \\\\
        &\\text{So, since } \\frac{|\\sin t|}{t} \\geq 0 \\text{, } \\ I_k \\geq \\int_{k\\pi + ε}^{(k+1)\\pi - ε} \\frac{|\\sin t|}{t} \\, dt \\text{ } \\text{ } \\forall ε\\ 0 < ε < \\pi/2 \\\\
        \\\\
        \\\\
        &\\text{The periodic graph of } \\ |\\sin t| \\text{ will help visualize the motive behind}\\\\
        &\\text{breaking the integral in such pieces: } \\\\
        \\end{aligned}
    `},
    {
      image: '/absolute_sine_plot_final.png'
    },
    {
      content:`
        \\begin{aligned}
        &\\text{We observe that: } \\ |\\sin t| \\geq |\\sin ε| \\ \\ \\forall t \\in (k\\pi + ε, (k+1)\\pi - ε) \\ \\forall k \\geq 0 \\\\
        &\\text{It follows: } \\ I_k \\geq |\\sin ε| \\int_{k\\pi + ε}^{(k+1)\\pi - ε} \\frac{dt}{t} \\ = \\ |\\sin ε| \\times \\ln\\left(\\frac{k\\pi + \\pi - \\varepsilon}{k\\pi + \\varepsilon}\\right) \\\\
        \\\\
        &\\quad\\text{Having a bound for } \\ I_k \\text{ we get:} \\\\
        &\\quad\\ I = \\sum_{k=0}^{\\infty} \\ I_k \\geq |\\sin ε|\\sum_{k=0}^{\\infty} \\ln\\left(\\frac{k\\pi + \\pi - \\varepsilon}{k\\pi + \\varepsilon}\\right) = |\\sin\\varepsilon| \\times \\ln\\left( \\prod_{k=0}^{\\infty} \\frac{(k+1)\\pi - \\varepsilon}{k\\pi + \\varepsilon} \\right) \\text{, } \\forall ε \\in (0, \\pi/2) \\\\
        \\\\
        &\\quad\\text{Given} \\ Z_n = \\prod_{k=0}^{n} \\frac{(k+1)\\pi - \\varepsilon}{k\\pi + \\varepsilon} \\text{, to prove that} \\ I\\text{ is divergent, we need to show that:} \\\\
        &\\quad\\quad \\exists ε \\in (0, \\pi/2) \\text{ so that } \\ Z_n \\to \\infty \\text{ , as } \\ n \\to \\infty \\\\
        \\\\
        &\\quad\\text{We can re-order the product:} \\\\
        &\\quad\\quad\\ Z_n = \\frac{\\pi - \\varepsilon}{ε} \\times \\frac{2\\pi - \\varepsilon}{\\pi + ε} \\times \\frac{3\\pi - \\varepsilon}{2\\pi + ε} \\times \\text{...} \\times \\frac{(n+1)\\pi - \\varepsilon}{n\\pi + ε} \\\\
        &\\quad\\text{As: } \\ Z_n = \\frac{(n+1)\\pi - \\varepsilon}{ε} \\times \\frac{\\pi - \\varepsilon}{\\pi + ε} \\times \\frac{2\\pi - \\varepsilon}{2\\pi + ε} \\times \\text{...} \\times \\frac{n\\pi - \\varepsilon}{n\\pi + ε} \\\\
        \\\\
        &\\quad\\text{I choose ε = 1} \\in (0, \\pi/2) \\implies \\ Z_n = [(n+1)\\pi - 1] \\times \\prod_{k=1}^{n} \\frac{k\\pi - 1}{k\\pi + 1} > n \\prod_{k=1}^{n} \\frac{k\\pi - 1}{k\\pi + 1}. \\\\
        \\\\
        &\\quad\\text{It is eazy to show that the function } \\ f(x) = \\frac{x - 1}{x + 1} \\text{ is increasing for } x > 1. \\\\
        &\\quad\\text{This yields  } \\frac{n\\pi - 1}{n\\pi + 1} > \\frac{k\\pi - 1}{k\\pi + 1} \\text{, } \\ k = 1, 2, 3, ..., n - 1 \\implies \\ Z_n > n \\times \\ ( \\frac{n\\pi - 1}{n\\pi + 1})^n. \\\\ // heres the mistake!
        &\\quad\\text{But, using De l' Hospital's rule we can show } \\ ( \\frac{n\\pi - 1}{n\\pi + 1})^n \\to \\ e^{-2/\\pi} \\text{, as n} \\to \\infty. \\\\
        &\\quad\\text{In conclusion, indeed } \\ Z_n \\to \\infty \\text{, as n} \\to \\infty. \\quad \\blacksquare
        \\end{aligned}
      ` 
    }
    ]
    
  }*/
 {
    id: '2',
    title: `A Proof Of The Foundational Theorem of Algebra`,
    claim: `$\\text{Every polynomial p(z) with degree n has n roots: } r_1, ..., r_n \\text{ and can be factored } \\\\ \\text{as } p(z) = a(z - r_1)...(z - r_n).$`,
    proof: `
    \\begin{aligned}
    &\\text{We shall first prove that for non-constant } p(z), \\ \\exists r \\in \\mathbb{C} \\text{ such that } p(r) = 0. \\text{ (claim 1)} \\\\
    &\\text{We shall also prove that for each root } r \\text{ of } p(z) \\text{ it follows that } z - r \\mid p(z). \\text{ (claim 2)} \\\\
    \\\\
    &\\underline{\\text{Proof of claim 1:}} \\\\
    &\\text{Let } p(z) \\text{ be a non-constant polynomial.} \\\\ &\\text{We can express } p(z) \\text{ as } p(z) = c - czq(z) \\text{ where } c = p(0) \\text{ and } q(z) \\text{ a polynomial}. \\\\
    &\\text{Suppose } p(z) \\not= 0, \\ \\forall z \\in \\mathbb{C} \\implies q(z) \\not= 1/z, \\ \\forall z \\in \\mathbb{C} \\setminus \\{0\\}. \\\\
    &\\text{Take the parametrization } z = re^{i\\theta}, \\ r > 0, \\ \\theta \\in [0, 2\\pi). \\\\
    &\\text{For each fixed } r \\text{ define } q_r(\\theta) = q(re^{i\\theta}). \\text{ Notice that } q_r \\text{ forms a closed curve in } \\mathbb{C}. \\\\
    &\\text{As } r \\to 0, \\ q_r \\text{ must form a small closed curve around } c' = q(0) \\text{, while } \\frac{1}{z} = \\frac{1}{r}e^{-i\\theta} \\\\
    &\\text{forms a large circle of radius } \\frac{1}{r} \\text{ centered at the origin.} \\\\
    &\\text{So for small enough } r, \\ q_r \\text{ is contained in the circle formed by } \\frac{1}{z}. \\\\
    &\\text{Since both } q_r \\text{ and } \\frac{1}{z} \\text{ are continuous, and don't intersect, } \\ q_r \\text{ must be contained in the} \\\\
    &\\text{interior of the circle of radius } \\frac{1}{r} \\text{ centered at the origin } \\forall r > 0. \\\\
    &\\text{So } |q_r(\\theta)| < \\frac{1}{r} \\ \\forall r > 0, \\ \\theta \\in [0, 2\\pi) \\implies \\lim_{r \\to \\infty} q_r(\\theta) = 0, \\ \\forall \\theta \\in [0, 2\\pi). \\\\
    &\\text{But } q(z) = 0 \\text{ is the only polynomial that tends to } 0 \\text{ as } |z| \\to \\infty. \\\\ 
    &\\text{So } q(z) = 0 \\implies p(z) = c, \\text{ contradicting } p(z) \\text{ being non-constant.} \\quad \\blacksquare \\\\
    \\\\
    &\\underline{\\text{Proof of claim 2:}} \\\\
    &\\text{Let } r \\text{ be a root of } p(z), \\text{ or p(r) = 0}. \\\\
    &\\text{We can express } p(z) \\text{ as: } \\quad p(z) = \\sum_{k=0}^{n} a_k z^k.\\\\
    &\\ p(z)-p(r) = \\sum_{k=0}^{n} a_k z^k - \\sum_{k=0}^{n} a_k r^k = \\sum_{k=1}^{n} a_k (z^k-r^k) = (z - r)\\sum_{k=1}^{n}\\sum_{i=0}^{k-1} a_k z^i r^{k-1-i} \\\\  
    &\\implies z - r \\mid p(z) - p(r) \\implies z - r \\mid p(z), \\text{ since } p(r) = 0. \\quad \\blacksquare \\\\
    \\\\
    &\\underline{\\text{Final Proof:}} \\text{ By Induction On The Polynomial Degree} \\\\
    &\\text{Base Case: } n = 0 \\text{ is trivial.} \\\\
    &\\text{Inductive Step: Assume the theorem holds for polynomials of degree } \\ n. \\\\
    &\\text{Let } p(z) \\text{ be a polynomial of degree } n + 1. \\\\
    &\\text{By claim 1, } \\exists r \\in \\mathbb{C} \\text{ such that } p(r) = 0. \\\\
    &\\text{By claim 2, } z - r \\mid p(z) \\implies p(z) = (z - r)p_1(z) \\text{ where } p_1 \\text{ a polynomial of degree } n. \\\\ 
    &\\text{By the inductive hypothesis, } p_1(z) \\text{ can be factored as } p_1(z) = a(z - r_1)...(z - r_n). \\\\
    &\\text{So } p(z) = a(z - r)(z - r_1)...(z - r_n). \\quad \\blacksquare
    \\end{aligned}
  `
  },
  {
    id: '3',
    title: `The Divergence Of The Harmonic Series`,
    claim: `$\\sum_{n=1}^{\\infty} \\frac{1}{n} = \\infty$`,
    proof: `
    \\begin{aligned}
    &\\text{Suppose } \\sum_{n=1}^{\\infty} \\frac{1}{n} \\text{ converges to } S \\in \\mathbb{R}. \\\\
    &\\ S = \\sum_{n=1}^{\\infty} \\frac{1}{2n - 1} + \\sum_{n=1}^{\\infty} \\frac{1}{2n} = \\sum_{n=1}^{\\infty} \\frac{1}{2n - 1} + \\frac{1}{2} \\sum_{n=1}^{\\infty} \\frac{1}{n} = \\sum_{n=1}^{\\infty} \\frac{1}{2n - 1} + \\frac{1}{2} S \\implies \\\\
    &\\ S = \\sum_{n=1}^{\\infty} \\frac{2}{2n - 1} = \\sum_{n=1}^{\\infty} \\frac{1}{n - \\frac{1}{2}} > \\sum_{n=1}^{\\infty} \\frac{1}{n} = S \\implies S > S, \\text{ contradiction.} \\quad \\blacksquare 
    \\end{aligned}
  `
  }
];

export default function Proofs() {
  const [expandedProof, setExpandedProof] = useState(null);

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
        <h1 className="text-4xl font-bold mb-2">ScrapBook</h1>
        <p className="text-xl text-gray-600">Select a proof to explore</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {proofs.map((proof, index) => (
          <div key={proof.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedProof(expandedProof === index ? null : index)}
              className="w-full p-4 bg-gray-50 hover:bg-gray-100 text-left flex justify-between items-center"
            >
              <h2 className="text-xl font-semibold">
                {renderMathOrText(proof.title)}
              </h2>
              <span className="text-gray-500">
                {expandedProof === index ? '▲' : '▼'}
              </span>
            </button>

            {expandedProof === index && (
              <div className="p-6 bg-white space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Claim:</h3>
                  <div className="text-lg">
                    {renderMathOrText(proof.claim)}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Proof:</h3>
                  {/* Only render proof.proof and proof.image if steps are not present */}
                  {!proof.steps && (
                    <>
                      <LatexRenderer content={proof.proof} block className="overflow-x-auto" />
                      {proof.image && (
                        <div className="flex justify-center mt-4">
                          <img
                            src={proof.image}
                            alt="proof image"
                            style={{ maxWidth: '90%', height: 'auto' }}
                          />
                        </div>
                      )}
                    </>
                  )}
                  {/* Render steps if present */}
                  {proof.steps && proof.steps.length > 0 && (
                    <div>
                      {proof.steps.map((step, i) => (
                        <div key={i} className="mb-6">
                          {step.content && (
                            <LatexRenderer content={step.content} block className="overflow-x-auto" />
                          )}
                          {step.image && (
                            <div className="flex justify-center mt-4">
                              <img
                                src={step.image}
                                alt={`proof step ${i + 1}`}
                                style={{ maxWidth: '90%', height: 'auto' }}
                              />
                            </div>
                          )}
                        </div>
                      ))}
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