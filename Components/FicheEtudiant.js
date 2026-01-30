const FicheEtudiant=(props)=>{

return(
    <div>
<h1 class="etudiant">Fiche Etudiant</h1>

<h2>Nom:{props.name} </h2>
<h2>Prénom: {props.prenoms}</h2>
<h2>Genre: {props.genre}</h2>
<h2>Filière: {props.filiere}</h2>

</div>

)

}

export default FicheEtudiant;

