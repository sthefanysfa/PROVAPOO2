import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceService from "../services/LanceService";
import LeilaoService from "../services/LeilaoService";

class LeilaoController{

    constructor(){}

    async createLeilao(req: Request, res: Response){
        const dadosLeilao: Prisma.LeilaoCreateInput = req.body;
        
        if(dadosLeilao.idLeilao != "") {
            const newleilao = await LeilaoService.createLeilao(dadosLeilao)
            res.status(200).json({
                status: 'ok',
                newleilao: newleilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLance(req: Request, res: Response){
        const lances = LeilaoService.listLance();

        res.status(200).json({
            status: 'ok',
            lances: lances
        })
    }

    async updateLeilao(req: Request, res: Response){
        res.send('Update leilao');
    }

    async deleteLeilao(req: Request, res: Response){
        res.send('Delete leilao');
    }
}

export default new LeilaoController;