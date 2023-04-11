//
// Created by Tucker Schulz on 4/11/23.
//
#ifndef RANKED_ARAM_ARAMER_H
#define RANKED_ARAM_ARAMER_H

//includes
#include <iostream>
#include <string>
#include <vector>
using std::cout, std::endl,std::string, std::vector;

class Aramer{
    //variable fields
    private: string user; string url; string rank;
    private: int elo;

    public:
    //default constructor
    Aramer(){
        cout << "default test" << endl;
    }
    //non default constructor
    Aramaer(string user){

        this->user = user;
        this->url = "https://u.gg/lol/profile/na1/" + user + "/overview";
        cout << url << endl;
    }

};





#endif //RANKED_ARAM_ARAMER_H
