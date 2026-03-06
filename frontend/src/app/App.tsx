import { Flex } from "@/shared/ui";
import { MainLayout } from "./layouts";
import { GithubCard, LinksCard } from "@/widgets/card";


const App = () => {
    return (
        <MainLayout>
            <Flex size="page-md" direction="column" align="center" gap="xl" container mt="xl">
                <GithubCard/>
                <LinksCard/>
            </Flex>
        </MainLayout>
    );
};

export default App;
