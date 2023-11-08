import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perrito } from '../interfaces/perrito';


@Injectable({
  providedIn: 'root'
})
export class MRMPerritosService {
  
  private apiUrl = 'http://localhost:3000/MRM_Perritos';

  constructor(private http: HttpClient) { }

  MRM_grabarRegistro(nuevoRegistro: Perrito) { 
    return this.http.post(this.apiUrl, nuevoRegistro);
  }

  MRM_actualizarRegistro(id: number, registroActualizado: Perrito) { 
    return this.http.put(`${this.apiUrl}/${id}`, registroActualizado);
  }

  MRM_eliminarRegistro(id: number) { 
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  MRM_leerRegistro(id: number) { 
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  MRM_listarRegistros() {
    return this.http.get<Perrito[]>(this.apiUrl); 
  }

}



