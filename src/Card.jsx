export default function Card() {
  return (
    <div className="card">
      <img
        className="img-card"
        alt=""
        src="https://images.unsplash.com/photo-1609845768806-767fcfc317b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
      />
      <div className="card-body">
        <h2 className="card-title">Title</h2>
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          facilis, aut commodi molestias odit porro. Consequuntur, obcaecati
          excepturi? Commodi, amet! Accusantium odit perspiciatis suscipit optio
          doloribus ipsa culpa nam exercitationem adipisci ut, aspernatur ullam
          modi dolorum cumque temporibus minus assumenda quas laudantium magnam
          excepturi asperiores.
        </p>
        <button className="btn-card">Click!</button>
      </div>
    </div>
  );
}
