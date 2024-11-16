package com.example.TreePlantationTracker.service;

import com.example.TreePlantationTracker.entity.Plantation;
import com.example.TreePlantationTracker.repository.PlantationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantationService {

    @Autowired
    private PlantationRepository repository;

    public Plantation savePlantation(Plantation plantation) {
        return repository.save(plantation);
    }

    public List<Plantation> getAllPlantations() {
        return repository.findAll();
    }
}