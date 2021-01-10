import React from 'react'

export default function about() {
  return (
    <div>
      <section
        className="section is-medium has-background-light isSection"
        id="a-propos"
      >
        <div className="columns is-vcentered  ">
          <div className="column is-half">
            <div className="container">
              <figure className="image">
                <img
                  class="nicolasImg"
                  src=""
                  alt="nicolas"
                  style="width:70%;"
                />
              </figure>
            </div>
          </div>
          <div
            className="column is-half has-text-justified"
            style="font-size:20px;"
          >
            <blockquote>
              Peindre m’apaise. Et la sérénité que m’apporte la peinture, au
              cœur de moi-même, met comme une sourdine sur les tumultes du
              monde. La question d’être dans le vrai, l’intelligence, de faire
              face au réel, prend même pour moi un caractère dérisoire. Je ne
              suis pas de ces artistes qui trouvent leur énergie à prendre
              position dans des combats d’idées. Ce qui me rend heureux quand,
              absorbé par mes bouts de couleur, je m’attache à retrouver la
              lenteur, la précision des gestes, c’est d’oublier de penser. Si
              l’Art est un moyen d’expression, ce que j’exprime m’échappe,
              surgit de moi et s’incorpore avec le résultat esthétique que
              j’atteins. L’usage des mots ne me l’aurait pas permis. Cela ne
              m’empêche pas de rester un spectateur gourmand d’univers
              artistiques variés ; de m’informer de tout les débats. Seulement
              le temps du créateur n’est pas le même – autrement plus lent ;
              entêté à creuser son sillon, il demeure seul et à fleur de peau.
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  )
}
