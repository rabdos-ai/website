export type SampleProblem = {
  id: number;
  domain: string;
  title: string;
  summary: string;
  prompt: string;
  answer: string;
};

export const sampleProblems: SampleProblem[] = [
  {
    id: 1,
    domain: "Group theory",
    title: "Dihedral necklace invariant",
    summary: "Group theory",
    prompt: String.raw`Let $n$ beads be arranged on a circle and indexed $0,1,\dots,n-1$. Each bead is colored by an element of the finite field $\mathbb{F}_7=\mathbb{Z}/7\mathbb{Z}$. Two colorings $(c_0,\dots,c_{n-1})\in \mathbb{F}_7^n$ are considered equivalent if one can be obtained from the other by a rotation or reflection of the necklace (that is, by the usual dihedral action $D_n$ on indices).

A coloring is *admissible* if it satisfies all three linear constraints in $\mathbb{F}_7$:
$$
\begin{aligned}
\sum_{i=0}^{n-1} c_i \equiv 0 \pmod 7,
\qquad \sum_{i=0}^{n-1} i\,c_i \equiv 0 \pmod 7,
\qquad \sum_{\substack{0\le i\le n-1\\ i\equiv 0\ (\mathrm{mod}\ 3)}} c_i \equiv 1 \pmod 7.
\end{aligned}
$$

For this problem, take $n=30$. How many $D_n$-equivalence classes of admissible colorings are there for $n=30$? Report your answer modulo $1{,}000{,}003$ as a positive integer.`,
    answer: "587104",
  },
  {
    id: 2,
    domain: "Algebraic combinatorics",
    title: "Hyperplane arrangement residues",
    summary: "Algebraic combinatorics",
    prompt: String.raw`Let $H$ be the set of all hyperplanes in $\mathbb{R}^{48}$ given by $x_i - x_j = 0$ or $x_i - x_j = 1$ for every pair of indices with $1 \le i < j \le 48$. Intersect $H$ with the hyperplane $x_1 + x_2 + \cdots + x_{48} = 0$ to obtain an arrangement inside that $47$-dimensional subspace. Let $r$ be the number of regions of this arrangement, and let $b$ be the number of relatively bounded regions. What is the remainder of $(r - b)$ when divided by $48$?`,
    answer: "2",
  },
  {
    id: 3,
    domain: "Probability",
    title: "MISSISSIPPI spacing",
    summary: "Probability",
    prompt: String.raw`Consider a random permutation of the letters in the word \`MISSISSIPPI\`. Each permutation is equally likely. What is the probability that no two **S**'s stand next to each other, no two **I**'s stand next to each other, and no two **P**'s stand next to each other?`,
    answer: "16/275",
  },
  {
    id: 4,
    domain: "Topology",
    title: "Exotic topology test",
    summary: "Topology",
    prompt: String.raw`Let $X$ be the set of real numbers and define $A = \left\{ \frac{1}{n} \;\middle|\; n = 1, 2, 3, \dots \right\}$. Define a topology $\tau$ on $X$ by declaring that a set $O \subset X$ belongs to $\tau$ if and only if $O = U - B$, where $U$ is an open set in the usual Euclidean topology on $\mathbb{R}$ and $B \subset A$. Determine whether the topological space $(X,\tau)$ is **countably paracompact.** Write \`1\` for true and \`0\` for false.`,
    answer: "0",
  },
  {
    id: 5,
    domain: "Epistemic logic",
    title: "Epistemic valuation census",
    summary: "Epistemic logic",
    prompt: String.raw`Consider a multi-agent epistemic model with three agents $A,B,C$ operating in the multi-agent logic $\mathsf{S5}$. The set of possible worlds is $W=\mathbb{F}_2^{12}$, the set of all 12-bit binary strings $x=(x_1,x_2,\dots,x_{12})$ with arithmetic modulo 2 (XOR). The designated actual world is $w_\star=0$ (the all-zeros string). Each agent $i$ has an equivalence relation $R_i$ on $W$ representing indistinguishability. We define these via linear subspaces of $\mathbb{F}_2^{12}$:

**Agent A.** Let $U_A=\mathrm{span}\{e_1,e_2\}$ where $e_j$ is the $j$th standard basis vector. Define $x\,R_A\,y$ iff $x-y\in U_A$ (equivalently, $x$ and $y$ differ only in coordinates 1 and 2).

**Agent B.** Let $U_B=\mathrm{span}\{e_3,e_4\}$. Define $x\,R_B\,y$ iff $x-y\in U_B$.

**Agent C.** Let $U_C=\mathrm{span}\{e_1+e_3,\,e_2+e_4\}$. Define $x\,R_C\,y$ iff $x-y\in U_C$.

**Epistemic operators.** Write $K_i\varphi$ for “agent $i$ knows $\varphi$,” $EG\varphi := K_A\varphi \wedge K_B\varphi \wedge K_C\varphi$ for “everyone knows $\varphi$,” and $CG\varphi$ for “common knowledge of $\varphi$ among $G=\{A,B,C\}$.” Common knowledge $CG\varphi$ holds at world $w$ iff $\varphi$ holds at every world reachable from $w$ by any finite sequence of steps along $R_A \cup R_B \cup R_C$.

**Component structure and tags.** Let $H=U_A+U_B+U_C$ (the subspace sum, computed with XOR addition). The connected components of the undirected graph with edge set $R_A\cup R_B\cup R_C$ are precisely the cosets $x+H$ for $x\in\mathbb{F}_2^{12}$. For each component $X$, define its tag as the 8-bit integer formed by the last eight coordinates of any world in $X$:
$$
\mathrm{tag}(X) := \text{binary value of }(x_5x_6x_7x_8x_9x_{10}x_{11}x_{12}) \in \{0,1,\dots,255\}.
$$
This is well-defined since $H$ acts only on the first four coordinates.

We consider valuations $V$ assigning truth values to three propositional atoms $p,q,r$ at each world. A valuation is *admissible* iff it satisfies two conditions:

**(F1)** At $w_\star$: $\mathcal{M},w_\star\models CG(EGp \wedge EG\neg q)$.

**(F2)** Among all components $X\ne X_\star$ (where $X_\star$ is the component containing $w_\star$), call $X$ *good* if for any (equivalently, every) $x\in X$: $\mathcal{M},x\models CGEGr \quad\wedge\quad CGEG(p\leftrightarrow r\oplus \mathrm{parity}(\,\mathrm{tag}(X)))$, where $\mathrm{parity}(t)$ is the sum of bits in the binary representation of $t$ modulo $2$, and $\oplus$ denotes XOR. Let $S=\{X\ne X_\star : X \text{ is good}\}$. Then, $|S|\equiv 7\pmod{13}$, $\sum_{X\in S}\mathrm{tag}(X)\equiv45\pmod{97}$. Count the number of admissible valuations. Report your answer modulo $10{,}007$.`,
    answer: "4814",
  },
];
