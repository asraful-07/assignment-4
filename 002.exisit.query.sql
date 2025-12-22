select * from vehicles v
where not exists (
  select 1
  from bookings b
  where b.vehicle_id = v.vehicle_id
);