# Introduction
Who does not like math? No doubt, everyone does! I was lucky to find an exciting research project on the interpretation of Grassmannians as moduli spaces of planar polygons. Theory behind Grassmannian-polygons correspondence is quite innovative and lacks convenient software. My goal was to develop a library that would implement this correspondence. On top of that, the research group needed programs with a reasonable UI to test conjectures and explore the translation between algebraic coordinates and geometry of polygons.

# Task
Technical task can be formulated easily, but was not as trivial to implement:
* Math department has had plenty of powerful Windows machines
* UI should have been minimalistic, but sufficient to visualize the data needed for research
* Reasonable performance on computationally hard tasks
The year was 2017, ASP.NET has still been a reasonable choice at that moment. So the decision was made to proceed with their canonical stack.

# First Results
To effectively test conjectures, a substantial number of polygons has had to be generated. Normally, we needed from a million to several billions of polygons, each being produced with the following procedure:
1. Generate random vectors
2. Orthonormalize these vectors with the Gram-Schmidt procedure
3. Align these vectors to form an enclosed shape - they will be guaranteed to do so
Once the polygon is generated, its properties can be computed. To test this approach the following experiment was done: if really many random triangles are generated, 83.81% of them will be obtuse. After this interesting test, a decent library implementing Plucker-polygon space correspondence was written in C#. 

# Story Unfolds
Given that no one could expect where the trail of findings will bring us, result visualization tools have had to be developed without any far-reaching plans or roadmaps. Besides that, investing too much time for any specific tool was a luxury we could not afford: low hanging fruit policy was dictating the selection of our UI tools.

Moving further into Plucker and Projection matrices corresponding to polygons, there was a need to visualize some results. Following low hanging fruit policy, we have implemeted html export of the results. With its beautiful simplicity, we have discovered that there is a strong probabilistic correlation between a sign of Plucker matrix values and polygon shape. It turned out to be possible to predict whether the polygon will be convex or not by looking at a small subset of signs.
![Simple console output with cool findings](./simple_ui.png "Console output")

Trying to explore how combinations of these signs affect the matrix shape, a cool interactive tool was written. The enhanced visualization has revealed interesting results: it is possible to identify polygon shape as convex or not just by looking on signs of the Plucker matrix. Specific patterns were found later with Decision-Tree classification. 


Apparently, more complex polygons predominantly have a boring self-intersecting shape. Therefore, it was becoming increasingly hard to generate convex ones. The decision was made to store them in a database for the further analysis. Luckily, it was easy to implement with **Entity Framework + MSSQL**. 


# Afterthoughts
Despite interesting mathematical findings, it was apparent that ASP.NET is not the best choice for high-performance computing. Apparently, in this project it was impossible to predict the focus of the next coding sprint, as it was a direct outcome of the experiment results. I have had to switch from high-performance and data storage tasks to frontend really quickly. Today many stacks provide this flexibility, but in 2016-2017 they were still evolving and this feature of C# was really useful… but in the next project we have switched to Python.
