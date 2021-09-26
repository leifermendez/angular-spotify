import { TrackModel } from './../../../core/models/tracks.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  trendTracks$: Observable<{ data: TrackModel[] }> = of()
  exampleTracks$: Observable<any> = new Observable()
  allInOne$: BehaviorSubject<TrackModel[]> = new BehaviorSubject<TrackModel[]>([])

  constructor() {
    const data: any = (dataRaw as any).default
    this.trendTracks$ = of(data) //TODO: Forma facil de crear una observable de lo que sea! 🤘


    this.exampleTracks$ = new Observable((observer) => {

      const dataTrack: TrackModel = {
        _id: 9,
        name: 'Leve',
        album: 'Carte de Santa',
        artist: {
          name: 'Cartel de Santa',
          nationality: 'MX',
          nickname: 'Cartel de Santa'
        },
        url: 'http://',
        cover: 'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/889853882823.jpg'
      }

      //TODO: Simulando una peticion que duro 4 segundos
      setTimeout(() => {
        observer.next(dataTrack)
      }, 4000)

    })

    const list = data.data

    this.allInOne$.next(list)
  }


}
