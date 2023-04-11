cmake_minimum_required(VERSION 3.24)
project(ranked_aram)

set(CMAKE_CXX_STANDARD 14)

include_directories(.)

add_executable(ranked_aram
        Aramer.h
        main.cpp)
