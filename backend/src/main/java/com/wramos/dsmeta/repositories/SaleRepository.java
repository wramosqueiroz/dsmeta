package com.wramos.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wramos.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
