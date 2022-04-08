select ch.Id
,cast(cast(h.Fecha as time(0)) as varchar(max)) as Hora
,c.Id as CanchaId
,isnull(r.EstadoId,0) as EstadoId
,isnull(e.Estado,'Disponible') as Estado
from canchahorario ch
    left join Horario h
        on h.Id=ch.horarioid
    left join Cancha c
        on c.Id=ch.canchaid
    left join Reserva r
        on r.canchahorarioid=ch.id
    left join Estado e
        on e.Id=r.estadoid
where cast(h.Fecha as date)=CAST(@fecha as date) 
and ch.activo=1
order by h.fecha asc

