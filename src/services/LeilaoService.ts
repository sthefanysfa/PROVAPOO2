import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LeilaoService{
    constructor(){

    }
    
    async listLance(lance: string, leilaoId: string){
        try{
            if(lance){
                const lance1 = await prisma.leilao.findUnique({
                    where:{
                        leilaoId
                    }
                });
                return lance;
            }else{
                const lances = await prisma.user.findMany();
                return lances;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }


    async createLeilao(leilao: Prisma.LeilaoCreateInput){
          try{
            const newleilao = await prisma.leilao.create({
                data: leilao
            });
            return newleilao;
          }catch(error){
            console.log(error);
            return null;
          }
    }

    async updateLeilao(leilaoId: string, leilao: Prisma.LeilaoUpdateInput){
         try{
            const newleilao = await prisma.leilao.create({
                data: leilao
            });
            return newleilao;
         }catch(error){
            console.log(error);
            return null;
         }
    }


    async deleteLeilao(leilaoId: string){
        try{
            const deleteLeilao = await prisma.leilao.delete({
                where:{
                    leilaoId
                }
            });
            return deleteLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoService();