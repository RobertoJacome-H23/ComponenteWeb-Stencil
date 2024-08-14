import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  // Propiedad que recibe la URL de la API
  @Prop() apiUrl: string="https://reqres.in/api/users?page=2"; //'https://reqres.in/api/users?page=2';

  // Estado que mantiene los datos de los usuarios y los errores de la solicitud.
  @State() users: any[] = [];
  @State() error: string = '';

  // Método de ciclo de vida que se ejecuta antes de que el componente se cargue. Llama a fetchData para obtener los datos.
  componentWillLoad() {
    this.fetchData();
  }

  // Método para hacer una solicitud a la API y actualizar el estado con los datos obtenidos.
  async fetchData() {
    try {
      // Realiza una solicitud a la URL proporcionada.
      const response = await fetch(this.apiUrl);
      // Verifica si la respuesta fue exitosa. Si no, lanza un error.
      if (!response.ok) {
        throw new Error(`Al intentar obtener los datos del servicio! Estado: ${response.status} - ${response.statusText}`);
      }
      // Convierte la respuesta a JSON.
      const data = await response.json();
      // Actualiza el estado con los datos obtenidos de la API.
      this.users = data.data;
      // Limpia cualquier mensaje de error previo.
      this.error = '';
    } catch (error) {
      // Captura y maneja cualquier error que ocurra durante la solicitud.
      this.error = 'La solicitud no se pudo realizar. ' + error;
    }
  }

  // Método para renderizar el componente.
  render() {
    return (
      <div class="table-container">
        {/* Muestra un mensaje de error si existe. */}
        {this.error && <p class="error">{this.error}</p>}

        {/* Renderiza la tabla con los datos de los usuarios */}
        {!this.error && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Foto</th> 
              </tr>
            </thead>
            <tbody>
              {/* Mapea los usuarios y renderiza cada fila de la tabla */}
              {this.users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>{user.email}</td>
                  <td><img src={user.avatar} alt="foto" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
