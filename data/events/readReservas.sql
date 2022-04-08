select r.Id
,r.UserName
,CONVERT(varchar,h.Fecha,103) as Fecha
,cast(cast(h.Fecha as time(0)) as varchar(max)) as Hora
,c.Cancha
,c.Precio
,e.Estado
,e.Id as EstadoId
from Reserva r
    join CanchaHorario ch
        on ch.Id=r.CanchaHorarioId
    join Cancha c 
        on c.Id=ch.CanchaId
    join Estado e
        on e.Id=r.EstadoId 
    join Horario h 
        on h.Id=ch.HorarioId 