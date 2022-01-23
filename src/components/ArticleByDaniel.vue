<template>
    <main class="article">
        <div class="article__author">
            {{ article.author }}
        </div>

        <div class="article__title">
            {{ article.title }}
        </div>

        <figure class="article__picture">
			<img class="picture" :src="article.picture"/>
		</figure>

        <div class="article__caption">
            {{ article.caption }}
        </div>

        <div class="article__text">
            <div class="text">
                {{ article.text_1 }}
            </div>

            <div class="text">
                {{ article.text_2 }}
            </div>

            <div class="text">
                {{ article.text_3 }}
            </div>

            <div class="text">
                {{ article.text_4 }}
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    author: 'Daniel Birnbaum',
                    title: 'Mutual Aid, Social Distancing, and Dual Power in the State of Emergency',
                    picture: '/assets/images/article_3.jpeg',
                    caption: 'Cover of Obieg 12: “The Speed of Guccifer.” The studio of TV UNU in the Romanian city of Râmnicu Vâlcea (a.k.a. Hackerville). Photo: Nicoleta Moise.',
                    text_1: 'In my 2016 article “Algo-ritmo,” I hyphenated the Spanish word for algorithm, creating a portmanteau consisting of the words “something” and “rhythm.”1 I played off the word “rhythm” to speak to what Derrida calls iterability in speech acts. Derrida argues that what makes speech acts effective are their iterability, that is, their repetition with alterity. For Derrida, it is alterity that enables conditions of possibility as opposed to determination—conditions of play. What McKittrick calls for in “Mathematics Black Life” is an alternative reading of the enumeration of colonial and anti-Black violence that renders an other-wise2 understanding, one that is based on an onto-epistemology that accounts for Black survival and those who lived.',
                    text_2: 'McKittrick’s focus on the “contours of Black life” as well as my focus on the “ritmo” of algo-ritmo imply patterns or rhythms that I would like to focus on here. I will argue that these patterns or rhythms are where the art or poethics of quantification lie. This is particularly important given that I will argue that algorithmic governance is a process of recursive rhythms and patterns. These rhythms and patterns are what preemptively shape a racializing affect, or what Jasbir Puar calls “slow life and debility.”3 I argue that algorithmic governance is made up of a system of modulating diffractive mechanisms (or diffractive modulators) that seek to compress the information patterns and rhythms of the world. Here, I see the potential of a poethics of other-wise diffractive patterns toward rerouting the onto-epistemology of the recursive system of algorithmic governance. I turn to algorithmic governance first.',
                    text_3: 'Since World War II, societies have been shifting from systems of institutional enclosures that discipline citizens’ ways of being to systems of infinite and continuous modulating mechanisms, which generatively control access to institutions and human behavior.4 Digital technologies and the “internet of things” have enabled increasingly distributed logics, rationalities, and practices of governance via cybernetic systems of communication and predictive control. While sovereign, discipline, and control technologies of capture continue to exist in concert, it is increasingly control that becomes the dominant logic of systems of governance.',
                    text_4: 'Within this context of cybernetic systems of governance, control has become the guaranteed form of “truth.” That is, the assured path to “truth” is to shape the futurity of “truth” in the present. Thus, rather than try to prevent or deter the existence of what is empirically verifiable, cybernetic systems of control work via a play on temporality that manufactures a becoming-assemblage such as an event, organization, or body in the form of a threat, an anxiety, or desire to mold futurity in the present (or present futurity). In other words, regardless of whether a becoming-assemblage is empirically or objectively verifiable, a future event is constructed based on already existing predispositions or beliefs. The operative logic for such an environment of manufactured futurity is preemptive action.'
                }
            }
        }
    }
</script>

<style>
    .article__author {
        padding-left: 20px;
        padding-top: 40px;
        font-size: 20px;
        font-weight: 400;
    }

    @media screen and (min-width: 768px) {
        .article__author {
            padding-left: 179px;
            font-size: 30px;
        }
    }

    .article__title {
        padding: 0px 20px;
        padding-bottom: 30px;
        font-size: 30px;
        font-weight: 400;
    }

    @media screen and (min-width: 768px) {
        .article__title {
            padding: 0px 179px;
            font-size: 40px;
        }
    }

    .article__picture {
        display: flex;
        align-items: center;
        overflow: hidden;
        height: 400px;
    }

    @media screen and (min-width: 768px) {
        .article__picture {
            display: flex;
            align-items: center;
            overflow: hidden;
            height: 750px;
        }
    }

    .picture {
        width: 100%;
        height: auto;
    }

    .article__caption {
        padding-left: 20px;
        padding-top: 8px;
        font-weight: 400;
    }

    .article__text {
        padding: 70px 20px;
        font-size: 20px;
        font-weight: 400;
    }

    @media screen and (min-width: 768px) {
        .article__text {
            padding: 100px 250px;
            font-size: 30px;
            font-weight: 400;
        }
    }

    .text {
        padding-bottom: 20px;
    }
</style>